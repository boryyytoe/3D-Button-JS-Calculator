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

// for deleting(backspace) single value
function deleteSingle() {
    backspaceValue = display.value;
    display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

// for escape key to clear display
function escapeKeyEvent (event) {
    if (event.which === 27) {
        clearDisplay();
    }
}


function keyboardInput(key) {    
    
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            calculate();
        } else {
            display.value = display.value;            
        }
        return true;
        
    
}

window.onload = function () {    
    document.onkeypress = keyboardInput;    
    
    document.onkeydown = backspaceKeyEvent;

    document.onkeydown = escapeKeyEvent;

};