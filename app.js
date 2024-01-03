function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function deleteLastCharacter() {
    if (display.value==="Error") {
        clearDisplay('')
        
      }
    
    var currentValue = display.value;
    if (currentValue.length > 0) {
      var newValue = currentValue.slice(0, -1);
      display.value = newValue;
    }
  }
