import { LightningElement, api } from 'lwc';

export default class Time extends LightningElement {

    get time() {
        return {hours:13, minutes:27, seconds:35}
    }
}
