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
