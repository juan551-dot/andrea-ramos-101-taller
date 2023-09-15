let ºF = 0
let ºK = 0
basic.forever(function () {
    ºF = input.temperature() * 1.8 + 32
    ºK = 5 / 9 * (ºF - 32) + 273.15
    basic.showString("" + ºF + "°F")
    basic.showString("" + ºK + "°K")
})
