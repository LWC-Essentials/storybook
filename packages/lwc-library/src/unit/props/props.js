import { LightningElement, buildCustomElementConstructor } from 'lwc';

/**
 * A component exposing properties.
 * 
 * @element unit-props
 */
export default class UnitProps extends LightningElement {

    /**
     * @prop {boolean}
     */
    propBoolean = false

    /**
     * @prop {number}
     */
    propNumber = 0

    /**
     * @prop {string}
     */
    propString = ""

    /**
     * @prop {Object}
     */
    propObject = { name: 'attrObject' } 

    /**
     * @prop
     */
    propBooleanImplicit = false

    /**
     * @prop
     */
    propNumberImplicit = 0

    /**
     * @prop
     */
    propStringImplicit = ""

    /**
     * @prop
     */
    propObjectImplicit = { name: 'attrObjectImplicit' } 

    /**
     * @prop
     */
    propNoType

    /**
     * @prop {string}
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
