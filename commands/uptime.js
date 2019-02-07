module.exports = {
  name: 'uptime',
  description: 'Uptime of bot.',
  execute(msg, args) {
      let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      msg.channel.send(`The bot is up for ` + uptime);
  },
};