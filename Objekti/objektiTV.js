const tv = {
    manufacturer: 'LG',
    color: 'black',
    isInColor: true,
    numberOfChannels: 120,
    currentChannel: 1,
    makeSound() {
        console.log(`BZZPT`);
    },
    channelUpDown(direction) {
        this.makeSound();
        if (direction)
            this.currentChannel++;
        else
            this.currentChannel--;

        if (this.currentChannel <= 0) {
            console.log(`Channel not available. (1 - 120 available)`);
            this.currentChannel++;
        } else if (this.currentChannel > 120) {
            console.log(`Channel not available. (1 - 120 available)`);
            this.currentChannel--;
        }
    },
    channelDesired() {

    }
}
let up = true;
let down = false;

console.log(`Channel ${tv.currentChannel}`);
tv.channelUpDown(down);
console.log(`Channel ${tv.currentChannel}`);