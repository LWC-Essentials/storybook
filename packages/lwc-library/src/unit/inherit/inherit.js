import { LightningElement, api } from 'lwc';

/**
 * Base inherit component.
 */
export default class Inherit extends LightningElement {

    /**
     * @type {"red"|"green"|"blue"}
     */
    @api color = 'red'
}
