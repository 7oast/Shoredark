const package = require("../package.json");
module.exports = {
  name: "help",
  description: "Basic info about the bot",
  execute(msg, args) {
    const ver = package.version;
    msg.reply("DM 채널을 확인하세요!");
    msg.author.send({
      embed: {
        color: 16777215,
        author: {
          name: msg.client.user.username,
          icon_url: msg.client.user.avatarURL
        },
        title: ver,
        fields: [
          {
            name: "명령어",
            value: `
$help: DM 채널을 통해 도움말을 띄웁니다.
$uptime: 봇이 실행된지 얼마나 지났는지 보여줍니다.
$retire: 슬픈 사람들의 전역일까지 얼마나 남았나 확인하세요.
$info: 서버 정보를 보여줍니다.
`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: msg.client.user.avatarURL,
          text: "© Titancube"
        }
      }
    });
  }
};
