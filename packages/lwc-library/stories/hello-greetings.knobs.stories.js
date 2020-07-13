import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
 
export default {
    title: 'hello-greetings-knobs',
    component: 'hello-greetings',
    decorators: [withKnobs],
};

export const default_ = () => html`
    <hello-greetings name="${text('Name','')}" message="${text('Message','')}"></hello-greetings>
`;
