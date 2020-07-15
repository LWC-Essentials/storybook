import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing attributes
 * 
 * @element unit-attrs
 */
export default class UnitAttrs extends LightningElement {

    /**
     * @attr {boolean}
     */
    @api attrBoolean = false

    /**
     * @attr {number}
     */
    @api attrNumber = 0

    /**
     * @attr {string}
     */
    @api attrString = ""

    /**
     * @attr {Object}
     */
    @api attrObject = { name: 'attrObject' } 

    /**
     * @attr
     */
    @api attrBooleanImplicit = false

    /**
     * @attr
     */
    @api attrNumberImplicit = 0

    /**
     * @attr
     */
    @api attrStringImplicit = ""

    /**
     * @attr
     */
    @api attrObjectImplicit = { name: 'attrObjectImplicit' } 

    /**
     * @attr
     */
    @api attrNoType

    /**
     * @attr {string}
     * @readonly
     */
    @api attrReadOnly


    get _componentData() {
        const json = {
            attrBoolean: this.attrBoolean,
            attrNumber: this.attrNumber,
            attrString: this.attrString,
            attrObject: this.attrObject,
            attrBooleanImplicit: this.attrBooleanImplicit,
            attrNumberImplicit: this.attrNumberImplicit,
            attrStringImplicit: this.attrStringImplicit,
            attrObjectImplicit: this.attrObjectImplicit,
            attrNoType: this.attrNoType,
            attrReadOnly: this.attrReadOnly,
        }
        return JSON.stringify(json,null,"  ");
    }
}

//customElements.define("unit-attrs", buildCustomElementConstructor(UnitAttrs));
