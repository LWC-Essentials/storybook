import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * This component shows all the available JSDoc tags.
 * 
 * @fires click - This event is sent when the component is clicked
 * @fires doubleclick
 * 
 * @slot - This component supports an unamed slot
 * @slot header - This component supports a header slot
 * @slot footer - This component supports a footer slot
 * 
 * @cssprop --main-bgcolor - The background color of the component
 * @cssprop --main-color
 * 
 * @csspart textspan - The span tag containing the text
 * @csspart iconimg
 * 
 * @element unit-jsdoc
 */
export default class UnitJSDocs extends LightningElement {

    /**
     * @attr - An example attribute
     * @type {"red"|"green"|"blue"}
     */
    @api color = 'red'

    /**
     * @prop - An example number property
     * @type {number}
     */
    number1
}

//customElements.define("unit-jsdoc", buildCustomElementConstructor(UnitJSDocs));
