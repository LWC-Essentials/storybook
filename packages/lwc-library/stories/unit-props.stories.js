import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

// Spread operator
//   https://github.com/Polymer/lit-html/issues/923
// LitHtml helper
//   https://open-wc.org/developing/lit-helpers.html#spread-directives

export default {
    title: 'Units/2- Properties',
    component: 'unit-props'
};

export const DefaultEmpty = () => html`
    <unit-props></unit-props>
`;

export const DefaultWithArgs = (args) => html`
    <unit-props
        .propBoolean=${args.propBoolean}
        .propNumber=${args.propNumber}
        .propString=${args.propString}
        .propObject=${args.propObject}
        .propBooleanImplicit=${args.propBooleanImplicit}
        .propNumberImplicit=${args.propNumberImplicit}
        .propStringImplicit=${args.propStringImplicit}
        .propObjectImplicit=${args.propObjectImplicit}
        .propNoType=${args.propNoType}
        .propReadOnly=${args.propReadOnly}
    >
    </unit-props>
`;

export const DefaultWithSpreadArgs = (args) => html`
    <unit-props ...="${spreadProps(args)}"></unit-props>
`;
