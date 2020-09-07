import { LightningElement, api, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing properties.
 */
export default class UnitProps extends LightningElement {

    /**
     * @type {boolean}
     */
    propBoolean = false

    /**
     * @type {number}
     */
    propNumber = 0

    /**
     * @type {string}
     */
    propString = ""

    /**
     * @type {Object}
     */
    propObject = { name: 'attrObject' } 

    /**
     * @type
     */
    propBooleanImplicit = false

    /**
     * @type
     */
    propNumberImplicit = 0

    /**
     * @type
     */
    propStringImplicit = ""

    /**
     * @type
     */
    propObjectImplicit = { name: 'attrObjectImplicit' } 

    /**
     * @type
     */
    propNoType

    /**
     * @type {string}
     * @readonly
     */
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
