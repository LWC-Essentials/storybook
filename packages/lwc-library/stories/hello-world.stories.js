import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
    title: 'hello-world',
    component: 'hello-world',
    decorators: [withKnobs],
};

export const default_ = () => html`
    <hello-world></hello-world>
`;
