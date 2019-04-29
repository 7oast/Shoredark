module.exports = {
  name: "rolemessage",
  description: 'dev command',
  execute(msg, args) {
    let initialMessage = `Shorelight에서는 역할에 따라 볼 수 있는 채널 카테고리를 다르게 하고 있습니다.
\`\`$role 역할\`\` 커맨드로 원하는 채널을 얻으세요. 만약 역할을 빼고 싶다면 다시 입력하여 제거할 수 있습니다.
\`\`\`
얻을 수 있는 역할
Admin       : Admin을 포함한 모든 카테고리와 채널
Gamer       : Gamer
Tech        : Tech
Student     : Edu
Inner       : INNER
\`\`\`

\`\`* Pirate와 NAS는 비공개 초대에 의해서만 획득 가능합니다.\`\`
    `
    if (msg.author.id != '116455101811392512') return;

    msg.channel.send(initialMessage)
  },
};