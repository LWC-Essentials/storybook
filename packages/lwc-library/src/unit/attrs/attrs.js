import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing attributes
 */
export default class UnitAttrs extends LightningElement {

    /**
     * @type boolean
     */
    @api attrBoolean

    /**
     * @type number
     */
    @api attrNumber

    /**
     * @type string
     */
    @api attrString

    /**
     * @type Object
     */
    @api attrObject

    /**
     */
    @api attrBooleanImplicit = false

    /**
     */
    @api attrNumberImplicit = 0

    /**
     */
    @api attrStringImplicit = ""

    /**
     */
    @api attrObjectImplicit = { name: 'attrObjectImplicit' } 

    /**
     */
    @api attrNoType

    /**
     * @type string
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
