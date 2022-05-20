/* 
    3.
        Uzeti 3 objekata iz stvarnog svijeta, i kreirati JavaScript objekte po
        njima. Mogu biti sta god vi zelite. Ponovo, imate potpunu slobodu kako
        da uradite ovaj zadatak.
*/
const monitor = {
    monitorPowerState: false,
    brand: 'LG',
    refreshRate: 60,
    refreshRateOpt1: 60,
    refreshRateOpt2: 75,
    refreshRateOpt3: 100,
    contrast: 100,
    brightness: 100,
    color: 'red-black',
    makeClickSound() {
        console.log("Click! ");
    },
    isMonitorOn() {
        if (this.monitorPowerState)
            console.log(`The monitor is on and displaying information.`);
        else
            console.log(`The monitor is off.`);
    },
    switchMonitorPowerState() {
        this.makeClickSound();
        if (this.monitorPowerState == false)
            console.log(`You turned the monitor on.`);
        else
            console.log(`You turned the monitor off`);
        this.monitorPowerState = !(this.monitorPowerState);
    },
    setRefreshRate(rate) {
        this.makeClickSound();
        if (rate == this.refreshRateOpt1 || rate == this.refreshRateOpt2 || rate == this.refreshRateOpt3) {
            this.refreshRate = rate;
            console.log(`Refresh rate set to ${rate}hz.`);
        } else {
            console.log(`Can't set refresh rate to ${rate}hz.`);
        }
    },
    displayCurrentRefreshRate() {
        console.log(`Your current refresh rate is ${this.refreshRate}hz.`);
    },
    displayAvailableRefreshRates() {
        console.log(`Avaliable refresh rates are ${this.refreshRateOpt1}hz, ${this.refreshRateOpt2}hz and ${this.refreshRateOpt3}hz.`)
    },
    displayContrast() {
        console.log(`Contrast is currently set to ${this.contrast}.`);
    },
    setContrast(contrast) {
        this.makeClickSound();
        if (contrast > 0 || contrast <= 100) {
            this.contrast = contrast;
            console.log(`Contrast set to ${contrast}.`);
        } else {
            console.log(`Can't set contrast to ${contrast}.`);
        }
    },
    displayBrightness() {
        console.log(`Brightness is currently set to ${this.brightness}.`);
    },
    setBrightness(brightness) {
        this.makeClickSound();
        if (brightness > 0 || brightness <= 100) {
            this.brightness = brightness;
            console.log(`Brightness set to ${brightness}.`);
        } else {
            console.log(`Can't set brightness to ${brightness}.`);
        }
    }
};
monitor.isMonitorOn();
monitor.switchMonitorPowerState();
monitor.isMonitorOn();
monitor.displayCurrentRefreshRate();
monitor.displayAvailableRefreshRates();
monitor.setRefreshRate(100);
monitor.displayCurrentRefreshRate();
monitor.displayContrast();
monitor.setContrast(50);
monitor.displayContrast();
monitor.displayBrightness();
monitor.setBrightness(50);
monitor.displayBrightness();
monitor.switchMonitorPowerState();
monitor.isMonitorOn();