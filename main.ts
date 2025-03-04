let DIRECCION = 0
basic.forever(function () {
    DIRECCION = input.compassHeading()
    if (DIRECCION > 330 || DIRECCION < 30) {
        basic.showString("N")
    } else if (DIRECCION > 31 && DIRECCION < 150) {
        basic.showString("E")
    } else if (DIRECCION > 151 && DIRECCION < 240) {
        basic.showString("S")
    } else if (DIRECCION > 241 && DIRECCION < 329) {
        basic.showString("O")
    } else {
        basic.clearScreen()
    }
})
