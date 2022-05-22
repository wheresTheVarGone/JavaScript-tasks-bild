/*
    1.	
        Kreirati funkciju koja kreira Company objekat. Company objekat ima sljedece properties:
            ○	ID → number
            ○	name → string
            ○	location → string
            ○	numberOfEmployees → number
            ○	employees → array
            ○	hirePerson → function
            ○	fireEmployee → function
        Svi objekti imaju ove properties, values prosljedjujete u funkciju.

    2.	Napisati funkciju koja nam kreira Person objekat. Person ima sljedece properties: 
            ○	ID → number
            ○	firstName → string
            ○	lastName → string
            ○	isEmployed → boolean
            ○	salary → number
            ○	companyID → number
    Svi objekti imaju ove properties, values prosljedjujete u funkciju.

    3.	Kreirati prazne nizove: COMPANIES i PEOPLE globalno.
    4.	Kreirati 3 kompanije sa vrijednostima koje vi zelite.
    5.	PEOPLE niz popuniti sa 1000 objekata s tim da imena mozete naci u ovom fajlu: employees.txt, a ostale properties postaviti na defaultne vrijednosti.
    6.	U prvu kompaniju zaposliti 40% nezaposlenih ljudi, u drugu kompaniju zaposliti 33% a u trecu kompaniju 50%. 
        S tim da ne smijete ici i redom zaposljavati ljude, jer ce vas tuziti ovi ljudi na kraju liste, tako da morate random ljude zaposljavati.
    7.	Kada se osoba zaposli dobija platu izmedju 1000 i 3000. Plata mora biti u inkrementima od 100, npr: 1300, 2400 itd ne moze biti 1654, 2214 itd.
    8.	Izracunati koliko % je nezaposlenih.
    9.	Otpustiti ljude iz sve 3 kompanije koji imaju platu manju od 1500.
    10.	Ponovo prikazati postotak nezaposlenih ljudi.
    11.	 Zatim, identifikovati kompaniju koja ima najmanju prosjecnu platu i dodatno zaposliti 50 ljudi u tu kompaniju.
    12.	Ispisati sve 3 kompanije, i prikazati broj zaposlenih i prosjecnu platu.
*/
function createNewCompanyObject(companyName, ID, location, numberOfEmployees) {
    const newObject = new Object();
    newObject.ID = ID;
    newObject.name = String(companyName);
    newObject.location = String(location);
    newObject.numberOfEmployees = numberOfEmployees;
    newObject.employees = [];
    newObject.hirePerson = function hirePerson() {

    }
    newObject.fireEmployee = function fireEmployee() {

    }
    return newObject;
}
function createNewPersonObject(ID, name, isEmployed, salary, companyID) {
    const nameArr = splitIntoFirstAndLastName(name);
    const newObject = new Object();
    newObject.ID = ID;
    newObject.firstName = nameArr[0];
    newObject.lastName = nameArr[1];
    newObject.isEmployed = isEmployed;
    newObject.salary = salary;
    newObject.companyID = companyID;
    return newObject;
}
function splitIntoFirstAndLastName(name) {
    const arr = []; // First name will be at position 0, last name at position 1
    let firstName = '', lastName = '';
    let opSwitch = false;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == ' ') {
            opSwitch = true;
            continue;
        }
        if (opSwitch == false) {
            firstName += name[i];
        } else {
            lastName += name[i];
        }
    }
    arr.push(firstName);
    arr.push(lastName);
    return arr;
}
const COMPANIES = [], PEOPLE = [];

COMPANIES.push(createNewCompanyObject('Beko', 1234, 'UK', 1200));
COMPANIES.push(createNewCompanyObject('Opal', 1555, 'GB', 1500));
COMPANIES.push(createNewCompanyObject('Peypel', 1293, 'KP', 1700));
console.table(COMPANIES);

const { readFileSync } = require('fs');

const namesArray = readFileSync('employees.txt').toString().replace(/\r\n/g, '\n').split('\n'); // Strpaj ovo u funkciju.
namesArray.pop();

for (let i = 0; i < 1000; i++) {
    PEOPLE.push(createNewPersonObject(i + 1, namesArray[i], false, null, null));
}
console.table(PEOPLE);

const randArr = [];

for (let i = 0; i < PEOPLE.length * 0.4; i++) {
    const rand = Math.floor(1 + Math.random() * 999);
    if (randArr.includes(rand)) {
        i--;
        continue;
    } else {
        PEOPLE[rand].isEmployed = true;
        PEOPLE[rand].companyID = 1234;
    }
    randArr.push(rand);
}
console.table(PEOPLE);


let brojZaposlenih = 0;
for (let i = 0; i < PEOPLE.length; i++) {
    if (PEOPLE[i].isEmployed) {
        brojZaposlenih++;
        COMPANIES[0].employees.push(PEOPLE[i].firstName + ' ' + PEOPLE[i].lastName);
    }
}
COMPANIES[0].numberOfEmployees = brojZaposlenih;
console.log(COMPANIES[0]);
console.table(PEOPLE);