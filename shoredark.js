const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
  if (msg.content === '$hi') {
    msg.reply('Ayyo');
  }
  if (msg.content === '$uptime') {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    msg.channel.send(`The bot is up for `+uptime);
  }
  if (msg.content === '$장준') {
    msg.reply('Liru짱...');
  }
  if (msg.content === '$radenika') {
    msg.channel.send('똥겜전문가는 왜 찾으세요?');
  }
  if (msg.content === '$stepic') {
    msg.channel.send('당신의 인생 머저리겜으로 대체되었다');
  }
});

client.login(process.env.BOT_TOKEN);