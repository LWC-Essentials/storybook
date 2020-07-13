export class Time {

    dataCallback;
    interval;

    constructor(dataCallback) {
        this.emitTime = this.emitTime.bind(this);
        this.dataCallback = dataCallback;
    }

    update(config) {
    }

    connect() {
        this.disconnect();
        this.interval = setInterval(this.emitTime,1000);
        this.emitTime();
    }

    disconnect() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }

    emitTime() {
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        this.dataCallback(time);
    }
}
