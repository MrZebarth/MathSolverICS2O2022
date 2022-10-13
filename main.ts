function Welcome () {
    basic.showString("Welcome!",70)
SetVariables()
    ShowFunction(temp)
}
input.onButtonPressed(Button.A, function () {
    temp += 1
    if (state == 0) {
        temp = temp % 3
        ShowFunction(temp)
    } else {
        basic.showNumber(temp,70)
    }
})
function ShowInput (state: number) {
    if (state == 1) {
        basic.showString("Num1",70)
    } else if (state == 2) {
        basic.showString("Num2",70)
    } else if (state == 3) {
        basic.showString("Num3",70)
    } else {
        basic.showString("Num4",70)
    }
    temp = 0
    basic.showNumber(temp)
}
function Factor (A: number, B: number, C: number) {
    discrim = discriminant(A, B, C)
    if (discrim < 0) {
        basic.showString("No Roots",70)
    } else if (discrim == 0) {
        x1 = (-1 * B + discrim) / (2 * A)
        basic.showString("x1,x2=" + x1,70)
    } else {
        x1 = (-1 * B + discrim) / (2 * A)
        x2 = (-1 * B - discrim) / (2 * A)
        basic.showString("x1=" + x1 + ", x2=" + x2)
    }
    Welcome()
}
function Eqn (x1: number, y1: number, x2: number, y2: number) {
    if (x1 == x2) {
        basic.showString("y = " + x1)
    } else if (y1 == y2) {
        basic.showString("x = " + y1)
    } else {
        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1
        if (b < 0) {
            sign = "-"
        } else {
            sign = "+"
        }
        basic.showString("y = " + m + "x" + sign + b)
    }
    Welcome()
}
function ShowFunction (func: number) {
    if (func == 0) {
        basic.showString("Eqn",70)
    } else if (func == 1) {
        basic.showString("Factor",70)
    } else {
        basic.showString("Intersect",70)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        choice = temp
        basic.showIcon(IconNames.Yes)
    } else if (state == 1) {
        num1 = temp
        basic.showIcon(IconNames.Yes)
    } else if (state == 2) {
        num2 = temp
        basic.showIcon(IconNames.Yes)
    } else if (state == 3) {
        num3 = temp
        basic.showIcon(IconNames.Yes)
    } else if (state == 4) {
        num4 = temp
        basic.showIcon(IconNames.Yes)
    }
    state += 1
    if (state < 4 || state == 4 && !(choice == 1)) {
        ShowInput(state)
    } else {
        if (choice == 0) {
            Eqn(num1, num2, num3, num4)
        } else if (choice == 1) {
            Factor(num1, num2, num3)
        } else {
            Intersect(num1, num2, num3, num4)
        }
    }
})
function discriminant (a: number, b: number, c: number) {
    d = b ** 2 - 4 * a * c
    return d
}
input.onButtonPressed(Button.B, function () {
    temp += -1
    if (state == 0) {
        temp = temp % 3
        ShowFunction(temp)
    } else {
        basic.showNumber(temp,70)
    }
})
function Intersect (m1: number, b1: number, m2: number, b2: number) {
	
}
function SetVariables () {
    // 0=function
    // 1=num1
    // 2=num2
    // 3=num3
    // 4=num4
    // 5=answer
    state = 0
    num1 = 0
    num2 = 0
    num3 = 0
    num4 = 0
    temp = 0
    choice = 0
}
let d = 0
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
let choice = 0
let sign = ""
let b = 0
let m = 0
let x2 = 0
let discrim = 0
let state = 0
let temp = 0
let x1 = 0
Welcome()
