import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing properties.
 * 
 * @element unit-props
 */
export default class UnitProps extends LightningElement {

    /**
     * @prop {boolean}
     */
    @api
    propBoolean = false

    /**
     * @prop {number}
     */
    @api
    propNumber = 0

    /**
     * @prop {string}
     */
    @api
    propString = ""

    /**
     * @prop {Object}
     */
    @api
    propObject = { name: 'attrObject' } 

    /**
     * @prop
     */
    @api
    propBooleanImplicit = false

    /**
     * @prop
     */
    @api
    propNumberImplicit = 0

    /**
     * @prop
     */
    @api
    propStringImplicit = ""

    /**
     * @prop
     */
    @api
    propObjectImplicit = { name: 'attrObjectImplicit' } 

    /**
     * @prop
     */
    @api
    propNoType

    /**
     * @prop {string}
     * @readonly
     */
    @api
    propReadOnly

    get _componentData() {
        const json = {
            propBoolean: this.propBoolean,
            propNumber: this.propNumber,
            propString: this.propString,
            propObject: this.propObject,
            propBooleanImplicit: this.propBooleanImplicit,
            propNumberImplicit: this.propNumberImplicit,
            propStringImplicit: this.propStringImplicit,
            propObjectImplicit: this.propObjectImplicit,
            propNoType: this.propNoType,
            propReadOnly: this.propReadOnly,
        }
        return JSON.stringify(json,null,"  ");
    }
}

//customElements.define("unit-props", buildCustomElementConstructor(UnitProps));
