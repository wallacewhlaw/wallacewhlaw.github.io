setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
function setClock() {
    const currentDate = new Date()
    const secoundsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secoundsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secoundsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock() 
