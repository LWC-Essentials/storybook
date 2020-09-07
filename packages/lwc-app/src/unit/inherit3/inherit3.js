import { LightningElement, api } from 'lwc';
import Inherit2 from 'unit/inherit2'

/**
 * Inherit component 3
 */
export default class Inherit extends Inherit2 {

    /**
     * @type {"brown"|"pink"|"cyan"}
     */
    @api border = 'brown'
}
