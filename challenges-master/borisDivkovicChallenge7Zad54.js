/*
    7.
        Napisati funkciju koja simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj, jedan znak operacije i drugi broj.
*/

function calcPls(num1, op, num2) {
    let res;
    switch (op) {
        case '+':
            res = num1 + num2;
            console.log(`${num1} ${op} ${num2} = ${res}`);
            break
        case '*':
            res = num1 * num2;
            console.log(`${num1} ${op} ${num2} = ${res}`);
            break;
        case '-':
            res = num1 - num2;
            console.log(`${num1} ${op} ${num2} = ${res}`);
            break;
        case '/':
            res = num1 / num2;
            console.log(`${num1} ${op} ${num2} = ${res}`);
            break;
        default:
            console.log("Pogresan unos.");
            break;
    }
    return res;
}

calcPls(12, '/', 3);