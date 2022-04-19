/*
    16.    
        Imamo masinu koja sitni novac. Obzirom da odredjenu kolicinu novca mozemo podijeliti na vise nacina, 
        nas program za ovu masinu bi trebao da ispise sve moguce opcije. Koristiti novcanice konvertibilne marke s tim da se ne koristi manja novcanica od 5 KM.
        Primjer: 20 KM bi se moglo usitniti na sljedece nacine:
        2 x 10KM, 4 x 5KM, 1 x 10KM + 2 x 5KM.
        Napisati funkciju koja prima jedan parametar, kolicinu novca, zatim funkcija ispisuje sve moguce opcije za tu kolicinu novca.
*/

function changeMachineOptions(cash) {
    let option;
    if (cash % 5 == 0) {
        option = cash / 5;
        process.stdout.write(`${option} * 5KM\t`);
    }
    if (cash % 10 == 0) {
        option = cash / 10;
        process.stdout.write(`${option} * 10KM\t`);
    }
    if (cash % 20 == 0) {
        option = cash / 20;
        process.stdout.write(`${option} * 20KM\t`);
    }
    if (cash % 50 == 0) {
        option = cash / 50;
        process.stdout.write(`${option} * 50KM\t`);
    }
    if (cash % 100 == 0) {
        option = cash / 100;
        process.stdout.write(`${option} * 100KM\t`);
    }
}
changeMachineOptions(200);