let DIRECCION = 0
basic.forever(function () {
    DIRECCION = input.compassHeading()
    if (DIRECCION > 337.5 && DIRECCION < 22.5) {
        basic.showString("N")
    } else if (DIRECCION > 67.5 && DIRECCION < 112.5) {
        basic.showString("E")
    } else if (DIRECCION > 202.5 || DIRECCION < 157.5) {
        basic.showString("S")
    } else if (DIRECCION > 247.5 || DIRECCION < 292.5) {
        basic.showString("O")
    } else {
        basic.clearScreen()
    }
})
