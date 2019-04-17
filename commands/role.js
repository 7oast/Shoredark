module.exports = {
  name: "role",
  description: "원하는 역할을 얻을 수 있습니다.",
  execute(msg, args) {
    if (!args.length) return msg.reply('no argument')

    const role = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase()
    const allowedRole = msg.guild.roles.find(nm => nm.name === role)
    if (!allowedRole) return
    if (msg.member.roles.has(allowedRole.id)) {
      msg.member.removeRole(allowedRole.id).catch(console.error)
      msg.reply(`${allowedRole.name} 권한을 제거했습니다.`)
    } else {
      msg.member.addRole(allowedRole.id).catch(console.error)
      msg.reply(`${allowedRole.name} 권한을 부여했습니다.`)
    }
  }
}