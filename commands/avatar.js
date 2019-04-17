module.exports = {
  name: 'avatar',
  description: 'Send avatar(s) of tagged users on current channel.',
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      return msg.channel.send(`Your avatar: ${msg.author.displayAvatarURL}`);
    }
    const avatarList = msg.mentions.users.map(user => {
      return `${user.username}'s avatar : ${user.displayAvatarURL}`;
    });
    msg.channel.send(avatarList);
  },
};