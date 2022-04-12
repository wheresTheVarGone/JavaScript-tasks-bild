/*
    12. 
        Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od
        1 do 20. Zatim sabira sve brojeve koje se nalaze na indexima cija suma
        je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.
*/
let matrix = [];

for(var i=0; i<4; i++) {
    matrix[i] = new Array(4);
}

let rand = 0, sum=0;
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        rand = Math.ceil(Math.random() * (19));
        matrix[i][j] = rand;
        if(((i + j) % 2) != 0){
            sum += matrix[i][j];
        }
    }
}
console.table(matrix);
console.log(`Suma svih elemenata matrice ciji je zbir indeksa neparan broj je ${sum}`);