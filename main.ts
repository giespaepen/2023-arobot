radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == radioCode) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        playCount = 10
        playRobot()
    }
})
input.onButtonPressed(Button.A, function () {
    playRobot()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(200)
    playCount = 10
    playRobot()
})
function playRobot () {
    for (let index = 0; index < playCount; index++) {
        basic.clearScreen()
        led.plotBarGraph(
        tone,
        700
        )
        tone = randint(131, 700)
        music.playTone(tone, music.beat(BeatFraction.Quarter))
        playCount = 25
        basic.clearScreen()
    }
}
let tone = 0
let radioCode = 0
let playCount = 0
radio.setGroup(1)
playCount = 25
radioCode = 314
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
	
})
