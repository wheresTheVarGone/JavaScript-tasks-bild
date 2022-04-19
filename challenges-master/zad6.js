/*
    6.
        Napisati funkciju koja prima 2D niz, zatim ga konertuje u 1D niz. Ovaj proces se zove: "flattening an array", gdje se smanjuje broj dimenzija niza.
*/

function flattenMultidimArray(matrix) {
    let newArr = [], arrIndex = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newArr[arrIndex] = matrix[i][j];
            arrIndex++;
        }
    }
    return newArr;
}

let matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(matrica);
console.table(flattenMultidimArray(matrica));

