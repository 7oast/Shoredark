module.exports = {
  name: "role",
  description: "원하는 역할을 얻을 수 있습니다.",
  execute(msg, args) {
    if (!args.length) return msg.reply('no argument')

    // Fetch the argument and format
    const role = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase()
    const allowedRole = msg.guild.roles.find(nm => nm.name === role)

    // Calcle the procedure if the role is not existing nor allowed
    if (!allowedRole) return
    
    // Check availability
    function checkPermission(rolename) {
      switch (rolename) {
        case "Admin":
        case "Nas":
        case "Pirate":
        case "Nas-admin":
        return false;
        default: return true;
      }
    }

    // Check if the role is existing and achievable by normal members of server.
    if (!checkPermission(rolename)) return;

    // Gives role if the person doesn't have it and takes it back when the one has.
    if (msg.member.roles.has(allowedRole.id)) {
      msg.member.removeRole(allowedRole.id).catch(console.error)
      msg.reply(`${allowedRole.name} 권한을 제거했습니다.`)
    } else {
      msg.member.addRole(allowedRole.id).catch(console.error)
      msg.reply(`${allowedRole.name} 권한을 부여했습니다.`)
    }
  }
}