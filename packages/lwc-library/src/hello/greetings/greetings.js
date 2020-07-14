import { LightningElement, api, wire, buildCustomElementConstructor } from 'lwc';

import { Time } from '../../wire/time'

/**
 * Greetings component that shows what an LWC component can provide.
 * 
 * @element hello-greetings
 */
export default class Greetings extends LightningElement {

    /**
     * This is a property that can be set from an attribute
     * 
     * @attr
     */
    @api name = ''

    /**
     * This is a property that comes from a wire adapter
     */
    @wire(Time) time = {};

    /**
     * This is a simple property
     * 
     * @property
     */
    message = 'Glad to see you'

    get greetings() {
        return `${this.message}, ${this.name}`
    }
}

//customElements.define("hello-greetings", buildCustomElementConstructor(Greetings));
