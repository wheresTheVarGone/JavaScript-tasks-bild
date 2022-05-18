/*
    1.     
        Prvog dana škole, direktor srednje škole Locker odlučuje da izvede eksperiment. Škola ima
        tačno 1.000 učenika i 1.000 ormarića poredanih duž glavnog hodnika škole. Svi
        ormarici su na pocetku otvoreni.


            a.     Direktor traži od prvog učenika da prođe glavnim hodnikom škole i zatvori sve ormariće.
            b.     Direktor zatim traži od drugog učenika da prođe glavnim hodnikom i otvori svaki drugi ormarić.
            c.     Direktor zatim traži od trećeg učenika da prođe glavnim hodnikom i ili otvori svaki treći
                   ormarić ako je zatvoren, ili ga zatvori ako je otvoren.
            d.     Četvrti učenik će zatim ponoviti isti postupak za svaki četvrti ormarić.

        I tako dalje, sve dok posljednji od 1.000 učenika ne ponovi ovaj proces za svaki 1.000-ti
        ormarić, dakle, u stvari, samo otvaranje 1.000-og ormarića ako je zatvoren, ili
        zatvaranje ako je već otvoren. Na kraju ovog eksperimenta direktor odlučuje da
        izbroji broj ormarića koji su zatvoreni. Koji je to broj?
*/
const closeLocker = () => false;
const openLocker = () => true;
function openAllLockers(arr) {
    for (let i = 0; i < 1000; i++) {
        arr.push(openLocker());
    }
}
function closeAllLockers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = closeLocker();
    }
}
function openEverySecondLocker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 == 0) {
            arr[i] = openLocker();
        }
    }
}
function openOrCloseEveryIndexLocker(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % index == 0) {
            if (arr[i] == closeLocker()) {
                arr[i] = openLocker();
            } else {
                arr[i] = closeLocker();
            }
        }
    }
}
function countClosedLockers(arr){
    let closedLockersCounter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == closeLocker()){
            closedLockersCounter++;
        }
    }
    return closedLockersCounter;
}
let lockersArr = [];
let studentIndex = 1;
openAllLockers(lockersArr);
for (let i = 0; i < lockersArr.length; i++) {
    switch (studentIndex) {
        case 1:
            closeAllLockers(lockersArr);
            break;
        case 2:
            openEverySecondLocker(lockersArr);
            break;
        case 3:
            openOrCloseEveryIndexLocker(lockersArr, 3);
            break;
        case 4:
            openOrCloseEveryIndexLocker(lockersArr, 4); 
            break;
        default:
            console.log("Error");
            break;
    }
    if(studentIndex == 4){
        studentIndex = 0;
    }
    studentIndex++;
}
console.table(lockersArr);
const closedLockersNum = countClosedLockers(lockersArr);
const openLockersNum = lockersArr.length - closedLockersNum;
console.log(`Broj zatvorenih ormarica nakon citavog procesa je ${closedLockersNum}, a otvorenih ${openLockersNum}`);