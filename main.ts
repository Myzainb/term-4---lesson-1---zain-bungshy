input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A E G F D E C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # . # . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G A D B B A C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hi I'm Zain!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.House)
    basic.showString("UGLY RAT")
    basic.showIcon(IconNames.Heart)
})
