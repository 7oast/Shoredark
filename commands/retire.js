module.exports = {
  name: 'retire',
  description: `Counts until Titancube's retirement.`,
  execute(msg, args) {
    let retire = new Date("Apr 27, 2019 08:00:00 +0900").getTime();
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
  },
};