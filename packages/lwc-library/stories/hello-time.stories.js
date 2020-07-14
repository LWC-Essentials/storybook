import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
    title: 'Display time',
    component: 'hello-time',
    decorators: [withKnobs],
};

export const default_ = () => html`
    <hello-time></hello-time>
`;

export const staticNullTime = () => html`
    <hello-time .time=${null}></hello-time>
`;

export const staticTime = () => html`
    <hello-time .time=${{hours:1,minutes:3,seconds:4}}></hello-time>
`;

export const nullTime = () => html`
    <wc-time></wc-time>
`;

export const emptyTime = () => html`
    <wc-time data='1'></wc-time>
`;

export const fixedTime = () => html`
    <wc-time data='2'></wc-time>
`;
