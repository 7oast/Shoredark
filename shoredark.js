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
  if (msg.content === '$help') {
    msg.reply('DM 채널을 확인하세요!');
    msg.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "v0.1",
    fields: [{
        name: "아직은 테스트 중입니다!",
        value: "별 다른 기능이 없습니다. 아직은."
      },{
        name: "\u200B",
        value: "\u200B"
      },{
        name: "명령어",
        value: "$help: DM 채널을 통해 도움말을 띄웁니다. \n $uptime: 봇이 실행된지 얼마나 지났는지 보여줍니다. \n $장준: 아이고 \n $radenika: 이제 똥겜 안한대요 \n $stepic: 머저리겜 그만해 \n $전역: Titancube의 전역이... 얼마나 남았는지... 보여줍니다..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Titancube"
    }
  }
});
  }
  if (msg.content === '$전역') {
    let retire = new Date("Apr 27, 2019 08:00:00").getTime();
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = retire - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    let retirecount = days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초";

    // If the count down is finished, write some text
    if (distance < 0) {
      msg.channel.send(`전역이다!`);
    } else {
      msg.channel.send(`Titancube 전역까지 ${retirecount} 남았습니다...`);
    }
  }
});

client.login(process.env.BOT_TOKEN);