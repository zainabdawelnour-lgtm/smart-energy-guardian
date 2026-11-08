input.onPinPressed(TouchPin.P0, function () {
	
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("DARK")
    } else {
        basic.showString("BRIGHT ")
    }
})
