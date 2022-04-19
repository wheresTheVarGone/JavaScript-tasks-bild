/*
    14.
        Napisati funkciju koja transponuje matricu. Dakle, prvo generisati matricu 3x3 i popuniti nasumicnim brojevima od 0 do 10 a zatim ju ispisati. 
        Sljedeci korak je trasponovanje matrice. Transponovati matricu znaci zamijeniti joj redove i kolone.

        Primjer:
            Ukoliko je matrica:
            1 2 3
            4 5 6
            7 8 9

            Transponovana matrica je:
            1 4 7
            2 5 6
            3 6 9
*/


function transposeMatrix(matrix) {
    let transpMatrix = [[], [], []];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            transpMatrix[j][i] = matrix[i][j];
        }
    }
    return transpMatrix;
}

let matrix = [[], [], []];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 0;
        matrix[i][j] += Math.floor(Math.random() * 10);
    }
}

console.table(matrix);
console.table(transposeMatrix(matrix));