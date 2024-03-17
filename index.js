const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }    
}

function deleteSingle() {
    backspaceValue = display.value;
    display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

function keyboardInput(key) {    
    
        if (key.which === 48 || key.which === 96) {
            display.value += "0";            
        } else if (key.which === 49 || key.which === 97) {
            display.value += "1";
        } else if (key.which === 50 || key.which === 98 ) {
            display.value += "2";
        } else if (key.which === 51 || key.which === 99) {
            display.value += "3";
        } else if (key.which === 52 || key.which === 100) {
            display.value += "4";
        } else if (key.which === 53 || key.which === 101) {
            display.value += "5";
        } else if (key.which === 54 || key.which === 102) {
            display.value += "6";
        } else if (key.which === 55 || key.which === 103) {
            display.value += "7";
        } else if (key.which === 56 || key.which === 104) {
            display.value += "8";
        } else if (key.which === 57 || key.which === 105) {
            display.value += "9";
        } else if (key.which === 46 || key.which === 110) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42 || key.which === 106) {
            display.value += "*";
        } else if (key.which === 47 || key.which === 111) {
            display.value += "/";
        } else if (key.which === 43 || key.which === 107) {
            display.value += "+";
        } else if (key.which === 45 || key.which === 109) {
            display.value += "-";
        } else if (key.which === 8) {
            deleteSingle();
        } else if (key.which === 27) {
            clearDisplay();
        }
        else if (key.which === 13) {
            calculate();
        } else {
            display.value = display.value;            
        }
        return true;       
    
}

window.onload = function () {
    document.onkeydown = keyboardInput;
};

