const add = function(a, b) {
    if (a != 0) {
        let sum = 0
        sum = a + b
        return sum }
}
const subtract = function(a,b) {
    if (a != 0) {
        let sum = 0
        sum = a - b
        return sum }
}
const multiply = function(a,b) {
    return a * b
}
const divide = function(a,b) {
    return a / b
}

const operate = function(operator, a, b) {
    if (operator == '+') {
        return add(a,b)
    } else if (operator == '-') {
        return subtract(a,b)
    } else if (operator == '*') {
        return multiply(a,b)
    } else if (operator == '/') {
        return divide(a,b)
    }
}

const changeDisplay = function(arr = '0') {
    if (arr == 'ac') {
        document.querySelector('#screen').textContent = '0'
    } else {
        document.querySelector('#screen').textContent = arr
    }
}
changeDisplay()

/*const screen = document.querySelector('#screen'); */
let operatorPressed = false;
let operator = '';
let buttonInput = [];
let secondInput = [];
let a = 0;
let b = 0;
let runningTotal = 0

document.querySelectorAll('.button').forEach( item => {
    item.addEventListener('click', () => {
    if ((operatorPressed == false && runningTotal == 0)) {
        buttonInput.push(item.id)
        a = +buttonInput.join("")
        changeDisplay(a) 
    } else {
        secondInput.push(item.id)
        b = +secondInput.join("")
        changeDisplay(b)
    }
    }) 
});


document.querySelectorAll('.control').forEach( item => {
    item.addEventListener('click', () => {
        if (operatorPressed == true && runningTotal == 0) {
            runningTotal = operate(operator, a, b)
            changeDisplay(runningTotal)
            reset()
        } else if (operatorPressed == true && runningTotal != 0) {
            runningTotal = operate(operator, runningTotal, b)
            changeDisplay(runningTotal)
            reset()
        }
        operatorPressed = true;
        operator = item.id
        
    })
})

document.querySelector('.equal').addEventListener('click', () => {
    if (runningTotal == 0 ) {
        runningTotal = operate(operator, a, b)
        changeDisplay(operate(operator, a, b)) 
    } else {
        runningTotal = operate(operator, runningTotal, b)
        changeDisplay(runningTotal)
    }
    reset()
    }
)

document.querySelector('.reset').addEventListener('click', () => {
    reset()
    changeDisplay()
    runningTotal = 0;
    }
)

const reset = function() {
    operatorPressed = false;
    operator = '';
    buttonInput = [];
    secondInput = [];
    a = 0;
    b = 0;
}
