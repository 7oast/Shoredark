module.exports = {
  name: 'retire',
  description: `Counts until Titancube and Aiobahn's retirement.`,
  execute(msg, args) {
    // Today
    const now = new Date().getTime()
//     let soldiers = [];

//     // Make a new soldier
//     function soldier(name, retire) {
//       this.name = name;
//       this.retire = new Date(retire).getTime();
//       this.distance = retire - now;
//       // this.remain = calculateRetire(this.distance);
//       soldiers.push({name: this.name, retire: this.retire, distance: this.distance});
//     }

//     const Aiobahn = new soldier("Aiobahn", "Oct 13, 2019 08:00:00");
//     const Aresynth = new soldier("Aresynth", "Oct 14, 2019 08:00:00");

    let aioRetire = new Date("Oct 13, 2019 08:00:00 +1000").getTime()
    let aresynthRetire = new Date("Oct 14, 2019 08:00:00 +1000").getTime()
    let toastRetire = new Date("Apr 02, 2021 08:00:00 +1000").getTime()
    // Get todays date and time
    

    // Find the tcDistance between now and the count down date
    let aioDistance = aioRetire - now
    let aresynthDistance = aresynthRetire - now
    let toastDistance = toastRetire - now

    // Time calculations for days, hours, minutes and seconds
    function calculateRetire(Distance) {
      let days = Math.floor(Distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((Distance % (1000 * 60)) / 1000)
      return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
    }

    // MSG!
//     for (let soldier in soldiers) {
//       msg.channel.send(`${soldier.name}의 전역까지 ${calculateRetire(soldier.distance)} 남았습니다`)
//     }
    
    msg.channel.send(`
Aiobahn 전역까지 ${calculateRetire(aioDistance)} 남았습니다.
Aresynth 전역까지 ${calculateRetire(aresynthDistance)} 남았습니다.
7OAST 전역까지 ${calculateRetire(toastDistance)} 남았습니다.
`)
  },
};