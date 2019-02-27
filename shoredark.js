const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const {
  prefix,
  BOT_TOKEN
} = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  let status = "$help"
  client.user.setActivity(status, {
    type: 'PLAYING'
  })
});

client.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }

});

client.on('error', console.error);

client.login(BOT_TOKEN);