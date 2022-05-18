/*
    3.      
        Napišite funkciju koja uzima tri dimenzije cigle: visinu (a),
        širinu (b) i dubinu (c) i vraća true ako ova cigla može stati u rupu sa širinom
        (w) i visinom (h).

        Primjeri: doesBrickFit(1, 1, 1, 1, 1) ➞ true
        doesBrickFit(1,2, 1, 1, 1) ➞ true
        doesBrickFit(1,2, 2, 1, 1) ➞ false

        Možete okrenuti ciglu kako god zelite prema rupi.
        Pretpostavljamo da cigla odgovara ako su njene veličine jednake veličini rupe
        (tj. veličina cigle bi trebala biti manja ili jednaka veličini rupe, ne
        striktno manja).
        Ne možete staviti ciglu na koso.
*/


function doesBrickFit(brickHeight, brickWidth, brickDepth, holeWidth, holeHeight) {
    let fitsNormally = false, fitsAnyhow = false;
    let brickVolume = brickHeight * brickWidth * brickDepth;
    let holeVolume = Math.pow(holeWidth, 2) * holeHeight;
    

    if (brickVolume <= holeVolume) {
        fitsNormally = true;
    } else if ((brickWidth + brickDepth) < (holeWidth * 4)){
        fitsAnyhow = true;
    }
    return fitsAnyhow || fitsNormally;
}

console.log(doesBrickFit(2, 2, 2, 2 ,2));