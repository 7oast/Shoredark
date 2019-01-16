const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

client.on('message', msg => {
  if (msg.content === '$hi') {
    msg.reply('Ayyo');
  }
  if (msg.content === '$uptime') {
    msg.channel.send(`The bot is up for ${uptime}.`);
  }
});

client.login(process.env.BOT_TOKEN);