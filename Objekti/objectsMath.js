/*
    2. 
        Kreirati Matematika objekat, koji je vrlo slican Math koji smo vec
        koristili. U ovom zadatu NE SMIJETE koristiti Math, vec morate pisati
        svoju logiku. Matematika objekt treba da ima sljedece funkcionalnosti:
            
            zaokruziNaManji(broj) - zaokruzuje decimalni broj na manji cijeli broj ---
            zaokruziNaVeci(broj) - zaokruzuje decimalni broj na veci cijeli broj ---
            stepenuj(broj, stepen) - stepenuje broj na odredjeni stepen ---
            zaokruziNaNajblizu(broj) - zaokruzuje decimalni broj na najblizi cijeli broj
            apsolutnaVrijednost(broj) - vraca apsolutnu vrijednost broja ---
            veciBroj(a, b) - vraca veci broj od 2 proslijedjena ---
            manjiBroj(a, b) - vraca manji broj od 2 proslijedjena ---
            PI - cuva konstantu PI ---
*/
const math = {
    PI: 3.1415926535, // returns pi with a few decimal digits
    absolutnaVrijednost(broj) {
        if (broj < 0)
            return -broj;
        return broj;
    },
    stepenuj(broj, step) {
        broj = this.absolutnaVrijednost(broj);
        let stepBroj = 1;
        for (let i = 0; i < step; i++)
            stepBroj = stepBroj * broj;
        return stepBroj;
    },
    veciBroj(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    },
    manjiBroj(a, b) {
        if (a < b)
            return a;
        else
            return b;
    },
    zaokruziNaManji(decBroj) {
        let strBroj = String(decBroj);
        let intBrojString = '';
        for (let i = 0; i < strBroj.length; i++) {
            if (strBroj[i] == '.') {
                for (let j = 0; j < i; j++) {
                    intBrojString += strBroj[j];
                }
            }
        }
        const intBroj = Number(intBrojString);
        return (intBroj);
    },
    zaokruziNaVeci(decBroj) {
        return this.zaokruziNaManji(++decBroj);
    },
    zaokruziNaNajblizu(decBroj) {
        let strBroj = String(decBroj);
        let decBrojString = '';
        for (let i = 0; i < strBroj.length; i++) {
            if (strBroj[i] == '.') {
                for (let j = i + 1; j < strBroj.length; j++) {
                    decBrojString += strBroj[j];
                }
            }
        }
        const decBrojNewString = '0.' + decBrojString;
        let decBrojNew = Number(decBrojNewString);
        if (decBrojNew < 0.5)
            decBrojNew = this.zaokruziNaManji(decBroj);
        else
            decBrojNew = this.zaokruziNaVeci(decBroj);
        return decBrojNew;
    }
}
const broj = -5;
const a = 2, b = 4;
console.log(math.PI); // vraca pi
console.log(math.absolutnaVrijednost(broj)); // vraca abs vrijednost broja
console.log(math.veciBroj(a, b)); // vraca veci broj od dva proslijedjena
console.log(math.manjiBroj(a, b)); // vraca manji broj od dva proslijedjena
console.log(math.stepenuj(a, b)); // stepenuje broj a brojem b
console.log(math.zaokruziNaManji(2.84329)); // zaokruzuje decimalni broj na sljedeci manji integer broj
console.log(math.zaokruziNaVeci(2.15324)); // zaokruzuje decimalni broj na sljedeci veci integer broj
console.log(math.zaokruziNaNajblizu(2.53245)); // zaokruzuje decimalni broj na najblizi veci/manji integer broj