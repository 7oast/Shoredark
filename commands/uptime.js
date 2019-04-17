module.exports = {
  name: 'uptime',
  description: 'Uptime of bot.',
  execute(msg, args) {
    let totalSeconds = (msg.client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days}일 ${hours}시간, ${minutes}분 ${seconds}초`;
    msg.channel.send(uptime + " 동안 실행중입니다.");
  },
};