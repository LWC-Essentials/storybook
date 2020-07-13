import { LightningElement, buildCustomElementConstructor } from 'lwc';

/**
 * The simpliest, possible Hello World component.
 * 
 * @element hello-world
 */
export default class World extends LightningElement {
}

//customElements.define("hello-world", buildCustomElementConstructor(World));
