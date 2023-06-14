let screen = document.querySelector('.value')
function displayNumber(value) {
    let screenvalue = screen.innerText.split("")
    // window.alert(screenvalue[screenvalue.length - 1])
    if (screenvalue[screenvalue.length - 1] != "+" && screenvalue[screenvalue.length - 1] != "-" && screenvalue[screenvalue.length - 1] != "*" && screenvalue[screenvalue.length - 1] != "/" && screenvalue[screenvalue.length - 1] != "%") {
        
        screen.innerText +=  value
    }
    else{
        screen.innerText +=  " " + value
    }
}

function displayOperator(value) {
    screen.innerText += " " +  value
}

function clearScren() {
    screen.innerText = ""
}

function calculate() {
    let arr = screen.innerText.split(" ")
    if (arr[1] == "+") {
        screen.innerText = ""
        let ans = Number(arr[0]) + Number(arr[2])
        screen.innerText += ans
    }
    if (arr[1] == "-") {
        screen.innerText = ""
        let ans = Number(arr[0]) - Number(arr[2])
        screen.innerText += ans
    }
    if (arr[1] == "*") {
        screen.innerText = ""
        let ans = Number(arr[0]) * Number(arr[2])
        screen.innerText += ans
    }
    if (arr[1] == "/") {
        screen.innerText = ""
        let ans = Number(arr[0]) / Number(arr[2])
        screen.innerText += ans
    }
    if (arr[1] == "%") {
        screen.innerText = ""
        let ans = Number(arr[0]) % Number(arr[2])
        screen.innerText += ans
    }
}