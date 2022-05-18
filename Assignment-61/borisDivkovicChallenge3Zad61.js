/*
    3. 
        Kreirajte funkciju za rotaciju dvodimenzionalne matrice od N * N, popunjenom nasumicnim elementima. 
        Rotacija se vrsi odredjen broj puta, s tim ako je broj pozitivan, rotacija je u smjeru kazaljke na satu, 
        a ako nije, onda je rotacija u suprotnom smjeru.
        Primjeri:
            rotateTransform([ 
            [2, 4], 
            [0, 0] 
            ], 1);

            Result:[ 
            [0, 2], 
            [0, 4] 
            ]

            rotateTransform([ 
            [2, 4], 
            [0, 0] 
            ], -1);

            Result:[ 
            [4, 0], 
            [2, 0] 
            ]
*/

let R = 4, C = R;
function rotatematrix(m, n, mat) {
    let row = 0, col = 0;
    let prev, curr;

    while (row < m && col < n) {
        if (row + 1 == m || col + 1 == n)
            break;

        prev = mat[row + 1][col];


        for (let i = col; i < n; i++) {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;

        for (let i = row; i < m; i++) {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;

        if (row < m) {
            for (let i = n - 1; i >= col; i--) {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;

        if (col < n) {
            for (let i = m - 1; i >= row; i--) {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
    console.table(mat);
}
let matrix = [], matrixDim = 4;
for (let i = 0; i < matrixDim; i++) {
    matrix[i] = new Array(matrixDim);
    for (let j = 0; j < matrixDim; j++) {
        const rand = Math.floor(1 + Math.random() * 9);
        matrix[i][j] = rand;
    }
}
console.table(matrix);
rotatematrix(R, C, matrix);