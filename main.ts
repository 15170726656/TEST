basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . . # . .
    . # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.plot(1, 2)
})
