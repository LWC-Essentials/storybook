import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * Component consuming slots.
 * 
 * @slot - This component supports an unamed slot
 * @slot header - This component supports a header slot
 * @slot footer - This component supports a footer slot
 * 
 * @element unit-slots
 */
export default class UnitSlots extends LightningElement {


}

//customElements.define("unit-slots", buildCustomElementConstructor(UnitSlots));
