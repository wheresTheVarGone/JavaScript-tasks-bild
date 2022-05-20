/*
    1. 
        Kreirati TV objekat. Nema daljeg opisa zadatka. Imate potpuno slobodu da uradite ovaj zadatak kako god zelite.
*/
const tv = {
    manufacturer: 'LG',
    color: 'black',
    isInColor: true,
    numberOfChannels: 120,
    powerState: false,
    channelNum: 1,
    volume: 10,
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
        switch (channelRange) {
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
        this.makeSound();
        console.log(`Changing channel`);
        if (!this.checkIfchannelRange(channel)) {
            this.channelNum = channel;
            return channel;
        }
        console.log(`Channel ${channel} doesn't exist (1-${this.numberOfChannels} available)`);
        return this.channelNum;
    },
    checkIfchannelRange(channel) {
        if (channel <= 0)
            return -1;
        else if (channel > this.numberOfChannels)
            return 1;
        else
            return 0;
    },
    setVolume(volume) {
        this.makeSound();
        if (volume <= 0 || volume > 100) {
            console.log(`Can't set volume level ${volume}, current volume ${this.volume}`);
        }
        this.volume = volume;
        console.log(`Volume set to ${this.volume}.`);
    }
};
tv.readPowerState();
tv.switchPowerState();
console.log(tv.channelNum);
tv.channelUpOrDown(-1);
console.log(tv.channelNum);
console.log(tv.desiredChannel(121));
console.log(tv.desiredChannel(82));
tv.setVolume(90);
tv.switchPowerState();