/*
    20.
        Napisati program koji pretvara neki string u Morsov kod(Morse code). See attached Task 20 tablica attachment.
*/

let str = 'Ja sam neki string koji ces pretvorit u morsov kod 12 932';
str = str.toUpperCase();
let morseCodeString = '';
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'A':
            morseCodeString += '._';
            break;
        case 'B':
            morseCodeString += '_...';
            break;
        case 'C':
            morseCodeString += '_._.';
            break;
        case 'D':
            morseCodeString += '_..';
            break;
        case 'E':
            morseCodeString += '.';
            break;
        case 'F':
            morseCodeString += '.._.';
            break;
        case 'G':
            morseCodeString += '__.';
            break;
        case 'H':
            morseCodeString += '....';
            break;
        case 'I':
            morseCodeString += '..';
            break;
        case 'J':
            morseCodeString += '.___';
            break;
        case 'K':
            morseCodeString += '_._';
            break;
        case 'L':
            morseCodeString += '._..';
            break;
        case 'M':
            morseCodeString += '__';
            break;
        case 'N':
            morseCodeString += '_.';
            break;
        case 'O':
            morseCodeString += '___';
            break;
        case 'P':
            morseCodeString += '.__.';
            break;
        case 'Q':
            morseCodeString += '__._';
            break;
        case 'R':
            morseCodeString += '._.';
        case 'S':
            morseCodeString += '...';
            break;
        case 'T':
            morseCodeString += '_';
            break;
        case 'U':
            morseCodeString += '.._';
            break;
        case 'V':
            morseCodeString += '..._';
            break;
        case 'W':
            morseCodeString += '.__';
            break;
        case 'X':
            morseCodeString += '_.._';
            break;
        case 'Y':
            morseCodeString += '_.__';
            break;
        case 'Z':
            morseCodeString += '__..';
            break;
        case '1':
            morseCodeString += '.____';
            break;
        case '2':
            morseCodeString += '..___';
            break;
        case '3':
            morseCodeString += '...__';
            break;
        case '4':
            morseCodeString += '...._';
            break;
        case '5':
            morseCodeString += '.....';
            break;
        case '6':
            morseCodeString += '_....';
            break;
        case '7':
            morseCodeString += '__...';
            break;
        case '8':
            morseCodeString += '___..';
            break;
        case '9':
            morseCodeString += '____.';
            break;
        case '0':
            morseCodeString += '_____';
            break;
        default:
            break;
    }
}
console.log(morseCodeString);