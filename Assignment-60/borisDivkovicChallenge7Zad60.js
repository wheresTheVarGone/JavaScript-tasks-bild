/*
    7. 
        Kreirati program koji će pronaći i ispisati sve brojeve od X do Y (uključujući granične vrijednosti) koji su deljivi svim svojim ciframa. 
        Na primjer, broj 36 je djeljiv sa brojevima 3 i 6. (36/6=6 i 36/3=12). Brojeve X i Y uzeti proizvoljno a moraju biti u opsegu od 10 do 6000.
*/
let X = 10, Y = 100, br, brCifri = 0, brDjeljivihCifri = 0, arr = [];

if (!(X < 10 || Y > 6000)) {
    for (let i = X; i <= Y; i++) {
        br = i;
        while (br >= 1) {
            const cifra = br % 10;
            brCifri++;
            if (i % cifra == 0) {
                // console.log(i ,cifra);
                brDjeljivihCifri++;
            }
            br = Math.trunc(br / 10);
        }
        if (brCifri === brDjeljivihCifri) {
            arr.push(i);
        }
        brCifri = 0;
        brDjeljivihCifri = 0;
    }
    console.log(arr);
} else {
    console.log("The input range has to be from 10 to 6000.")
}

