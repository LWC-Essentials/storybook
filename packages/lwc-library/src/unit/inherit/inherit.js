import { LightningElement, api } from 'lwc';

/**
 * Base inherit component.
 * @element unit-inherit
 */
export default class Inherit extends LightningElement {

    /**
     * @type {"red"|"green"|"blue"}
     */
    @api color = 'red'
}
