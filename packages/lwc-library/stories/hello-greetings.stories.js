import { html } from 'lit-html';

export default {
    title: 'Hello Greetings',
    component: 'hello-greetings'
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
    // Disable the control on greetings
    greetings: { control: { disable: true } },
};
