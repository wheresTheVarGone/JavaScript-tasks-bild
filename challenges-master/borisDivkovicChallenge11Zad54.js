/*
    11. 
        Napisati program koji ispisuje 9x9 matricu množenja. Program treba da ispiše tablicu u formatu prikazanom ispod.
        
        1   2   3   4   5   6   7   8   9  
        2   x   x   x    
        3   x   x   x
        4   x   x   x
        5   x   x   x         …….
        6   x   x   x
        7   x   x   x
        8   x   x   x
        9   x   x   x
*/
let matrix = [];

for (let i = 0; i < 9; i++) {
    matrix[i] = [];
    for (let j = 0; j < 9; j++) {
        matrix[i][j] = 1;
        matrix[i][j] = (i + 1) * (j + 1);
    }
}
console.table(matrix);