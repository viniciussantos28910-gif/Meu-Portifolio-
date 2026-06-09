const display = document.getElementById('display');

function pressed(value) {
    if (display.innerText === 'Error') {
        display.innerText = '';
    }
    display.innerText += value;
}

function clearAll() {
    display.innerText = '';
}

function backspace() {
    if (display.innerText === 'Error') {
        display.innerText = '';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        if (display.innerText) {
            display.innerText = eval(display.innerText);
        }
    } catch (e) {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
  
    
    if (/[0-9\+\-\*\/\.]/.test(key)) {
        pressed(key);
    } 
    
    else if (key === 'Enter' || key === '=') {
        event.preventDefault(); 
        calculate();
    } 
    
    else if (key === 'Backspace') {
        backspace();
    } 

    else if (key === 'Escape' || key === 'Delete') {
        clearAll();
    }
});
