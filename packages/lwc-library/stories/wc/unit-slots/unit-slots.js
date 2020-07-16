import { LightningElement, api } from 'lwc';

export default class UnitSlots extends LightningElement {

    @api headerContent = '';
    @api bodyContent = '';
    @api footerContent = '';
}
