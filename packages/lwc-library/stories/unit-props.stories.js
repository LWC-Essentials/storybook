import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
    title: 'Units/Properties',
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
