const textareaEl = document.getElementById('inputtext');

textareaEl.focus();
textareaEl.addEventListener('input', updateInput);


function updateInput(evt) {
    if (!updateInput.text && updateInput.text != '') {
        updateInput.text = '';
        updateInput(evt);
    } else {
        updateCache(evt);
    }
    function updateCache(e) {
        if(e.inputType === 'deleteContentBackward') {
            updateInput.text = updateInput.text.slice(0, updateInput.text.length-9);
        }
        else {
            updateInput.text += charToBinary(e.data);
        }
        e.target.value = updateInput.text;
    }
}


function charToBinary(char) {
    char = charToAscii(char);
    char = char.toString(2);
    return char.padStart(8, '0') + ' ';
}

function charToAscii(char) {
    return char.charCodeAt(0);
}

/////////////////////////////////////////////////////////////////////
////// FROM BINARY TO TEXT //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const binAreaEl = document.getElementById('inputbin');
const translateBtnEl = document.getElementById('translate-btn');

translateBtnEl.addEventListener('click', translateInput);

function translateInput(evt) {
    let text = '';
    for (let i = 0; i < binAreaEl.value.length; i+=9){
        let char = binAreaEl.value.slice(i, i+9);
        text += binToChar(char);
    }
    binAreaEl.value = text;
}


function binToChar(bin) {
    //binary to number
    bin = parseInt(String(bin).slice(0, bin.length-1), 2);
    //number to string
    return asciiToChar(bin);
}

function asciiToChar(code) {
    return String.fromCharCode(code);
}