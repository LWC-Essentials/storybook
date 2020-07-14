import { LightningElement, api } from 'lwc';

export default class Time extends LightningElement {

    @api data;

    get time() {
        const data = this.data;
        if(data) {
            if(data==='1') {
                return {hours:0, minutes:0, seconds:0}
            }
            if(data==='2') {
                return {hours:13, minutes:27, seconds:35}
            }
        }
        return null
    }
}
