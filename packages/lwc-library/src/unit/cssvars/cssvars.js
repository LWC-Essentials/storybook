import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing css variables
 * 
 * @cssprop unit-border-width
 * @cssprop unit-border-color
 * @cssprop unit-text-color
 * @cssprop unit-text-size
 */
export default class UnitCssVars extends LightningElement {

    /**
     */
    @api message = "Hello, CSS Variables!"

}

//customElements.define("unit-cssvars", buildCustomElementConstructor(UnitCssVars));
