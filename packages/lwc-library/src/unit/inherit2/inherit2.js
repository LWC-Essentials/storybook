import { LightningElement, api } from 'lwc';
import BaseInherit from '../inherit/inherit'

/**
 * Inherit component 2.
 */
export default class Inherit extends BaseInherit {

    /**
     * @type {"yellow"|"black"|"white"}
     */
    @api background = 'yellow'
}
