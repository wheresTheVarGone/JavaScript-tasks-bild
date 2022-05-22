/* 
    5.
        Uzeti 3 objekata iz stvarnog svijeta, i kreirati JavaScript objekte po
        njima. Mogu biti sta god vi zelite. Ponovo, imate potpunu slobodu kako
        da uradite ovaj zadatak.
*/
const fridge = {
    color: "black",
    manufacturer: "Beko",
    minTemperature: -2,
    maxTemperature: 8,
    currentTemperature: 5,
    containsFood: true,
    checkIfContainsFood() {
        if (this.containsFood)
            console.log(`The fridge contains food.`);
        else
            console.log(`It's empty :(.`);
    },
    checkCurrentTemperature() {
        console.log(`The currenct temperature is ${this.currentTemperature} degrees Celzius.`);
    },
    checkMinMaxTemperature() {
        console.log(`The minimal temperature is ${this.minTemperature} degrees Celzius.\nThe maximal temperature is ${this.maxTemperature} degrees Celzius.`);
    },
    showInfo() {
        console.log(`This fridge is ${this.color} and it was made by ${this.manufacturer}.`);
        this.checkMinMaxTemperature();
        this.checkCurrentTemperature();
        this.checkIfContainsFood();
    },
    changeTemperature(direction) {
        if (direction < 0)
            direction = -1;
        else
            direction = 1;
        this.currentTemperature += direction;
        if (this.currentTemperature < this.minTemperature) {
            this.currentTemperature++;
            console.log(`Can't go underneath the temperature limit (-2 degrees Celzius).`);
        } else if (this.currentTemperature > this.maxTemperature) {
            this.changeTemperature--;
            console.log(`Can't go above the temperature limit (8 degrees Celzius).`)
        }
    }
};
fridge.showInfo();
fridge.changeTemperature(-1);
fridge.checkCurrentTemperature();