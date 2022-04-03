/*
    11. 
        Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.
*/
let matrix = [];

for(var i=0; i<4; i++) {
    matrix[i] = new Array(4);
}

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        matrix[i][j] = Math.ceil(Math.random() * 19);
    }
}
console.table(matrix);