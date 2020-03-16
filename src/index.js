const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let exprStr = expr;

    if (exprStr.length % 10) {
      let numberOfZeros = 10 - (exprStr.length % 10);
      exprStr += '0'.repeat(numberOfZeros);
    }

    let exprArr = exprStr.match(/.{10}/g);
    let message = '';

    for (let i = 0; i < exprArr.length; i++) {
        if (exprArr[i][0] === '*') {
          message += ' ';
        } else {
          let morseCode = '';
          let morseArr = exprArr[i].match(/\d{2}/g);
    
          for (let i = 0; i < morseArr.length; i++) {
            if (morseArr[i] === '10') {
              morseCode += '.';
            } else if (morseArr[i] === '11') {
              morseCode += '-';
            }
          }
    
          message += MORSE_TABLE[morseCode];
        }
      }
    
      return message;
}

module.exports = {
    decode
}