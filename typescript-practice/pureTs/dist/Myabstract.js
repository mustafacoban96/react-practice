"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepial() {
        console.log('asdasdasd');
    }
}
// xxxx const hc = new Takephoto("test","test"); we can't create an object from abstract class.
class Instagram extends TakePhoto {
    constructor(cameraMod, filter, burst) {
        super(cameraMod, filter);
        this.cameraMod = cameraMod;
        this.filter = filter;
        this.burst = burst;
    }
    getMus() {
        throw new Error("Method not implemented.");
    }
}
const hc = new Instagram("test", "test", 22);
hc.getSepial();
