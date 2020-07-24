import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

// Spread operator
//   https://github.com/Polymer/lit-html/issues/923
// LitHtml helper
//   https://open-wc.org/developing/lit-helpers.html#spread-directives

export default {
    title: 'Patterns/1- Attributes',
    component: 'unit-attrs'
};

export const DefaultEmpty = () => html`
    <unit-attrs></unit-attrs>
`;

export const DefaultWithArgs = (args) => html`
    <unit-attrs
        attr-boolean="${args.attrBoolean}"
        attr-number="${args.attrNumber}"
        attr-string="${args.attrString}"
        attr-object="${args.attrObject}"
        attr-boolean-implicit="${args.attrBooleanImplicit}"
        attr-number-implicit="${args.attrNumberImplicit}"
        attr-string-implicit="${args.attrStringImplicit}"
        attr-objectImplicit="${args.attrObjectImplicit}"
        attr-no-type="${args.attrNoType}"
        attr-read-only="${args.attrReadOnly}"
    >
    </unit-attrs>
`;

export const DefaultWithSpreadArgs = (args) => html`
    <unit-attrs ...="${spreadProps(args)}"></unit-attrs>
`;
