/*
    Imamo robota koji hoda po 2D koordinatnoj mreži sa osama x i y. Počinje na (0, 0) tj x = 0 i y = 0 i okrenut je prema sjeveru. 
    Nakon svakog kretanja, robot se rotira za 90 stepeni u smjeru kazaljke na satu. S obzirom na količinu koju je robot pomjerio svaki put, 
    morate izračunati konačnu poziciju robota. Ilustracije radi, ako se robotu daju pokreti 20, 30, 10, 40 onda će se kretati: 20 koraka sjeverno, 
    sada na (0, 20) 30 koraka istočno, sada na (30, 20) 10 koraka južno. sada u (30, 10) 40 koraka zapadno, sada na (-10, 10) ...i završit će na koordinatama (-10, 10).
*/

function funnyRobot(up, right, down, left) {
    let x = 0, y = 0;
    console.log(x, y);
    y += up;
    console.log(x, y);
    x += right;
    console.log(x, y);
    y -= down;
    console.log(x, y);
    x -= left;
    console.log(x, y);
}

funnyRobot(20, 30, 10, 40);