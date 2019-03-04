module.exports = {
  name: 'retire',
  description: `Counts until Titancube and Aiobahn's retirement.`,
  execute(msg, args) {
    let tcRetire = new Date("Apr 27, 2019 08:00:00 +0900").getTime()
    let aioRetire = new Date("Oct 13, 2019 08:00:00 +0900").getTime()
    // Get todays date and time
    let now = new Date().getTime()

    // Find the tcDistance between now and the count down date
    let tcDistance = tcRetire - now
    let aioDistance = aioRetire - now

    // Time calculations for days, hours, minutes and seconds
    function calculateRetire(Distance) {
    let days = Math.floor(Distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((Distance % (1000 * 60)) / 1000)
    return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
    }

    // MSG!
    msg.channel.send(`
Titancube 전역까지 ${calculateRetire(tcDistance)} 남았습니다.
Aiobahn 전역까지 ${calculateRetire(aioDistance)} 남았습니다.
`)
  },
};