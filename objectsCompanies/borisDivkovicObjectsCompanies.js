/*
    1.	Kreirati funkciju koja kreira Company objekat. Company objekat ima sljedece properties:
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
    11.	Zatim, identifikovati kompaniju koja ima najmanju prosjecnu platu i dodatno zaposliti 50 ljudi u tu kompaniju.
    12.	Ispisati sve 3 kompanije, i prikazati broj zaposlenih i prosjecnu platu.
*/
function defineSalary() {
    const rand = Math.floor(1000 + Math.random() * 2000);
    const salary = 100 * (Math.round(rand / 100));
    return salary;
}
function getUnemployedPercentage(){
    let numOfUnemployed = 0;
    for(let i = 0; i < PEOPLE.length; i++){
        if(!PEOPLE[i].isEmployed)
            numOfUnemployed++;
    }
    return ((numOfUnemployed / (PEOPLE.length - 1))*100).toFixed(2) + '%';
}
function getLowestAvgSalaryCompanyIndex(companyNum){
    const sumArr = [];
    for(let i = 0; i < companyNum; i++){
        sumArr.push(0);
        for(let j = 0; j < COMPANIES[i].employeesID.length; j++){
            let ID = COMPANIES[i].employeesID[j];
            sumArr[i] += PEOPLE[ID].salary;
        }
        sumArr[i] = sumArr[i] / COMPANIES[i].employeesID.length - 1;
    }
    const min = Math.min(...sumArr);
    for(let i = 0; i < companyNum; i++){
        if(sumArr[i] == min){
            return i;
        }
    }
}
function avgSalary(companyNum){
    const sumArr = [];
    for(let i = 0; i < companyNum; i++){
        sumArr.push(0);
        for(let j = 0; j < COMPANIES[i].employeesID.length; j++){
            let ID = COMPANIES[i].employeesID[j];
            sumArr[i] += PEOPLE[ID].salary;
        }
        sumArr[i] = sumArr[i] / COMPANIES[i].employeesID.length - 1;
        COMPANIES[i].avgWages = sumArr[i].toFixed(2);
    }
}
function updateNumberOfEmployees(companyID){
    COMPANIES[companyID].numberOfEmployees = COMPANIES[companyID].employees.length - 1;
}
function createNewCompanyObject(companyName, ID, location, numberOfEmployees) {
    const newObject = new Object();
    newObject.ID = ID;
    newObject.name = String(companyName);
    newObject.location = String(location);
    newObject.numberOfEmployees = numberOfEmployees;
    newObject.employees = [];
    newObject.employeesID = [];
    newObject.avgWages;
    newObject.hirePerson = function hirePerson(percentage, companyIndex, opSwitch) {
        const randArr = [];
        if(!opSwitch){
            for (let i = 0; i < PEOPLE.length * percentage; i++) {
                const rand = Math.floor(1 + Math.random() * 999);
                if (randArr.includes(rand)) {
                    i--;
                    continue;
                } else if (PEOPLE[rand].isEmployed == false) {
                    PEOPLE[rand].isEmployed = true;
                    PEOPLE[rand].companyID = COMPANIES[companyIndex].ID;
                    PEOPLE[rand].salary = defineSalary();
                    COMPANIES[companyIndex].employeesID.push(PEOPLE[rand].ID);
                    COMPANIES[companyIndex].employees.push(PEOPLE[rand].firstName + ' ' + PEOPLE[rand].lastName);
                }
                randArr.push(rand);
            }
        } else {
            for (let i = 0; i < 50; i++) {
                const rand = Math.floor(1 + Math.random() * 999);
                if (randArr.includes(rand)) {
                    i--;
                    continue;
                } else if (PEOPLE[rand].isEmployed == false) {
                    PEOPLE[rand].isEmployed = true;
                    PEOPLE[rand].companyID = COMPANIES[companyIndex].ID;
                    PEOPLE[rand].salary = defineSalary();
                    COMPANIES[companyIndex].employeesID.push(PEOPLE[rand].ID);
                    COMPANIES[companyIndex].employees.push(PEOPLE[rand].firstName + ' ' + PEOPLE[rand].lastName);
                }
                randArr.push(rand);
            }
        }
        updateNumberOfEmployees(companyIndex);
    },
        newObject.fireEmployee = function fireEmployee(companyIndex, salaryLimit) {
            for(let i = 0; i < COMPANIES[companyIndex].employees.length; i++){
                let ID = COMPANIES[companyIndex].employeesID[i];
                if(PEOPLE[ID].salary < salaryLimit){
                    COMPANIES[companyIndex].employees.splice(i, 1);
                    COMPANIES[companyIndex].employeesID.splice(i, 1);
                    PEOPLE[ID].salary = null;
                    PEOPLE[ID].isEmployed = false;
                    PEOPLE[ID].companyID = null;
                }
            }
        }
    return newObject;
}
function createNewPersonObject(ID, name, isEmployed, salary, companyID) {
    const nameArr = name.split(' ');
    const newObject = new Object();
    newObject.ID = ID;
    newObject.firstName = nameArr[0];
    newObject.lastName = nameArr[1];
    newObject.isEmployed = isEmployed;
    newObject.salary = salary;
    newObject.companyID = companyID;
    return newObject;
}
function readThisFile(path, name) {
    const { readFileSync } = require('fs');
    // Pozdravljam te mentore, ubacio sam path jer mi VSC nije prepoznavao da se .txt file nalazi u istom folderu. Sve sam isprobao.
    //                                      Delete!
    const newArrayWithNames = readFileSync(`${path}${name}`).toString().replace(/\r\n/g, '\n').split('\n');
    newArrayWithNames.pop();
    return newArrayWithNames;
}
function readThisFilePathless(name) {
    // Alternativno pozovi ovu funkciju dok budes pregledao, komentarisao sam poziv ispod.
    const { readFileSync } = require('fs');
    const newArrayWithNames = readFileSync(`${name}`).toString().replace(/\r\n/g, '\n').split('\n');
    newArrayWithNames.pop();
    return newArrayWithNames;
}
const COMPANIES = [], PEOPLE = [];

COMPANIES.push(createNewCompanyObject('Beko', 1111, 'UK', 0));
COMPANIES.push(createNewCompanyObject('Opal', 2222, 'GB', 0));
COMPANIES.push(createNewCompanyObject('Peypel', 3333, 'KP', 0));

let filePath = 'C:/Users/John/Desktop/JavaScript-tasks-bild/objectsCompanies/';
let fileName = 'employees.txt';
const namesArray = readThisFile(filePath, fileName);
// const namesArray = readThisFilePathless(fileName);

for (let i = 0; i < 1000; i++) {
    PEOPLE.push(createNewPersonObject(i, namesArray[i], false, null, null));
}

COMPANIES[0].hirePerson(0.4, 0, false);
COMPANIES[1].hirePerson(0.33, 1, false);
COMPANIES[2].hirePerson(0.5, 2, false);

let unemployedPercentage = getUnemployedPercentage();
console.log(`Postotak nezaposlenih je ${unemployedPercentage}`);


for(let i = 0; i < COMPANIES.length; i++){
    COMPANIES[i].fireEmployee(i, 1500);
}

unemployedPercentage = getUnemployedPercentage();
console.log(`Postotak nezaposlenih je ${unemployedPercentage}`);

const lowestAvgSalaryCompanyIndex = getLowestAvgSalaryCompanyIndex(3);
COMPANIES[lowestAvgSalaryCompanyIndex].hirePerson(null, lowestAvgSalaryCompanyIndex, true);

avgSalary(COMPANIES.length); // racuna prosjecne plate za proizvoljan broj kompanija

for(let i = 0; i < COMPANIES.length; i++){
    console.log(COMPANIES[i]);
    console.log(`Broj zaposlenih je ${COMPANIES[i].numberOfEmployees}`);
    console.log(`Prosjecna plata je ${COMPANIES[i].avgWages}`);
}