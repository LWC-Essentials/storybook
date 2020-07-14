import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
    title: 'Hello Greetings',
    component: 'hello-greetings',
    decorators: [withKnobs]
};

export const Default = () => html`
    <hello-greetings></hello-greetings>
`;

export const Controls = (args) => html`
    <hello-greetings name=${args.name} .message=${args.message}></hello-greetings>
`;

export const ControlsDefaultValue = (args) => html`
    <hello-greetings name=${args.name} .message=${args.message}></hello-greetings>
`;
ControlsDefaultValue.args = { name: 'Sentenza, the bad' }

export const ControlsCustom = (args) => html`
    <hello-greetings name=${args.name} .message=${args.message}></hello-greetings>
`;
ControlsCustom.argTypes = {
    // Completely hide the time property
    time: { table: { disable: true } },
    // Disable the control on message & greetings
    message: { control: { disable: true } },
    greetings: { control: { disable: true } },
};

export const knobs = () => html`
    <b>This is old stuff, prefer the use of Controls</b><br/><br/>
    <hello-greetings name="${text('Name','')}" message="${text('Message','')}"></hello-greetings>
`;
