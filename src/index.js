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
    let exprSplitted = expr.match(/.{1,10}/g);
    exprSplitted = exprSplitted.map(x => x.replace(/^0+/, '')).map(x => x.replace('**********', ' ')).map(x => x.replaceAll(/10/g, '.')).map(x => x.replaceAll(/11/g, '-'));

    let decodedExpr = exprSplitted.map(x => {
        if(x === ' ') { return " "}
        return MORSE_TABLE[x]
    }).join('')
    return decodedExpr;
}

module.exports = {
    decode
}
