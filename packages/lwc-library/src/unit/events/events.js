import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component that sends custom events
 */
export default class UnitEvents extends LightningElement {
 
    helloClick() {
        this.dispatchEvent(new CustomEvent('hello'));
    }

    goodbyeClick() {
        this.dispatchEvent(new CustomEvent('goodbye'));
    }
}

//customElements.define("unit-events", buildCustomElementConstructor(UnitEvents));
