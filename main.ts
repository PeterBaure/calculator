input.onButtonPressed(Button.A, function () {
    a += 1
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    b += 1
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a)
    basic.showString("+")
    basic.showNumber(b)
    add = a + b
    basic.showString("=")
    basic.pause(300)
    basic.clearScreen()
    basic.showNumber(add)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    a = 0
    b = 0
    basic.showNumber(a)
    basic.showNumber(b)
})
let add = 0
let b = 0
let a = 0
basic.showLeds(`
    # # # . .
    # . . # .
    # . # . #
    . # . . #
    . . # # #
    `)
basic.clearScreen()
basic.forever(function () {
	
})
