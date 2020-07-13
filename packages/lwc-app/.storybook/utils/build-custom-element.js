import { buildCustomElementConstructor } from 'lwc';

export default function buildAndRegisterCustomElement(elementName, elementClass) {
    if (!customElements.get(elementName)) {
        customElements.define(elementName, buildCustomElementConstructor(elementClass));
    }
}
