module.exports = {
  name: 'info',
  description: 'View server info',
  execute(msg, args) {
    let guild = msg.guild;
    let humans = 0;
    guild.members.forEach(member => {
      if (!member.user.bot) humans++;
    });
    msg.channel.send(`${msg.guild.name}은 ${msg.guild.createdAt}에 만들어졌으며, 총 ${humans}명이 있습니다.`);
  },
};