module.exports = {
  name: 'help',
  description: 'Basic info about the bot',
  execute(msg, args) {
    const ver = `v0.4`;
    msg.reply('DM 채널을 확인하세요!');
    msg.author.send({
      embed: {
        color: 3447003,
        author: {
          name: msg.client.user.username,
          icon_url: msg.client.user.avatarURL
        },
        title: ver,
        fields: [{
          name: "아직은 테스트 중입니다!",
          value: "별 다른 기능이 없습니다. 아직은."
        }, {
          name: "\u200B",
          value: "\u200B"
        }, {
          name: "명령어",
          value: `
$help: DM 채널을 통해 도움말을 띄웁니다.
$uptime: 봇이 실행된지 얼마나 지났는지 보여줍니다.
$retire: Titancube의 전역이... 얼마나 남았는지... 보여줍니다...
$info: 서버 정보를 보여줍니다. 아직 시간, 인원 수만 구현되었습니다.
`
        }],
        timestamp: new Date(),
        footer: {
          icon_url: msg.client.user.avatarURL,
          text: "© Titancube"
        }
      }
    });
  },
};