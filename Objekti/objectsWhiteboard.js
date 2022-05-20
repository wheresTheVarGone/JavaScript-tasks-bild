/* 
    4.
        Uzeti 3 objekata iz stvarnog svijeta, i kreirati JavaScript objekte po
        njima. Mogu biti sta god vi zelite. Ponovo, imate potpunu slobodu kako
        da uradite ovaj zadatak.
*/
const whiteboard = {
    color: "white",
    dimensions: "245x125",
    manufacturer: "BrightSide",
    content: '',
    isWrittenOn: false,
    makeScribbleSound() {
        console.log(`Scribble scribble...`);
    },
    writeOnWhiteboard(string) {
        this.makeScribbleSound();
        this.content += string;
        this.isWrittenOn = true;
    },
    displayContent() {
        if (this.content != '') {
            this.isWrittenOn = true;
            return this.content;
        }
        this.isWrittenOn = false;
        return "It's empty";
    },
    clearContent() {
        this.content = '';
        this.isWrittenOn = false;
    },
    displayInfo() {
        console.log(`This whiteboard is white, it's dimensions are ${this.dimensions}cm and it's manufactured by ${this.manufacturer}`);
        if (this.isWrittenOn) {
            console.log(`Something is written on the whiteboard.`);
        } else {
            console.log(`Nothing is written on the whiteboard.`);
        }
    }
};
whiteboard.displayInfo();
console.log(whiteboard.displayContent());
whiteboard.writeOnWhiteboard("Today was a good day.");
console.log(whiteboard.displayContent());
whiteboard.displayInfo();