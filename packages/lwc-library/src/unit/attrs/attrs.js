import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing attributes
 * 
 * @element unit-attrs
 */
export default class UnitAttrs extends LightningElement {

    /**
     * @attr
     * @type boolean
     */
    @api attrBoolean

    /**
     * @attr
     * @type number
     */
    @api attrNumber

    /**
     * @attr
     * @type string
     */
    @api attrString

    /**
     * @attr
     * @type Object
     */
    @api attrObject

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
     * @attr
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
