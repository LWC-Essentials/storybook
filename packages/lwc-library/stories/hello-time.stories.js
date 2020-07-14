import { html } from 'lit-html';

export default {
    title: 'Display time',
    component: 'hello-time'
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

export const staticInvalidTime = () => html`
    <hello-time .time=${{hours:34,minutes:3,seconds:4}}></hello-time>
`;

export const wrappedTime = () => html`
    <wc-time></wc-time>
`;
