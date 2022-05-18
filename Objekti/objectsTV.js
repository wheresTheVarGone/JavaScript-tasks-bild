/*
    1. 
        Create a TV using an object in javascript.
*/
const tv = {
    manufacturer: 'LG',
    color: 'black',
    isInColor: true,
    numberOfChannels: 120,
    powerState: false,
    channelNum: 1,
    switchPowerState() {
        this.powerState = !(this.powerState);
        this.makeSound();
        this.readPowerState();
    },
    makeSound() {
        console.log(`BZZPT`);
    },
    readPowerState() {
        if (this.powerState)
            console.log(`The TV is on.`)
        else
            console.log(`The TV is off`)
    },
    channelUpOrDown(direction) {
        this.makeSound();
        if (direction <= 0)
            direction = -1;
        else
            direction = 1;
        this.channelNum += direction;
        let channelRange = this.checkIfchannelRange(this.channelNum);
        switch(channelRange){
            case -1:
                this.channelNum++;
                console.log(`Channel doesn't exist (1-${this.numberOfChannels} available)`);
                break;
            case 1: 
                this.channelNum--;
                console.log(`Channel doesn't exist (1-${this.numberOfChannels} available)`);
                break;
            default:
                return this.channelNum;
        }
    },
    desiredChannel(channel) {

    },
    checkIfchannelRange(channel) {
        if (channel <= 0)
            return -1;
        else if (channel > this.numberOfChannels)
            return 1;
        else
            return 0;
    }
};
tv.readPowerState();
tv.switchPowerState();
console.log(tv.channelNum);
tv.channelUpOrDown(-1);
console.log(tv.channelNum);