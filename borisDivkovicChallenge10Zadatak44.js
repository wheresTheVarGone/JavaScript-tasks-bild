/* 
    10. 
        Napisati program koji će neki prirodni broj A (A > 100000), te kreirati i ispisati broj B koji će se 
        sastojati od cifara broja A u obrnutom redoslijedu u kojem je svaka parna cifra uklonjena. 
        (npr. ako se unese 45362792 funkcija će vratiti 9735). Ispisati brojeve A i B i razliku tih brojeva.
*/
let brojA = '45362792', brojB = '';
let duzina = brojA.length-1;
for(let i = duzina; i >= 0; i--){
    if((Number(brojA[i]) % 2) != 0){
        brojB += brojA[i];
    } else {
        continue;
    }
}
let razlika = Number(brojA) - Number(brojB);
console.log(`${brojA} - ${brojB} = ${razlika}`);