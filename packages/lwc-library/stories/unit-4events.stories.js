import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
export default {
    title: 'Patterns/4- Events',
    component: 'unit-events'
};

export const Actions = ({doHello,doGoodbye}) => html`
    <unit-events @hello="${doHello}" @goodbye="${doGoodbye}"></unit-events>
`;
Actions.args = {
    doHello: action('Hello Clicked!'),
    doGoodbye: action('Goodbye Clicked!')
}

// export const Actions = ({doHello,doGoodbye}) => html`
//     <unit-events @hello="${doHello} @goodbye="${doGoodbye}"></unit-events>
// `;
// Actions.args = {
//     doHello: action('Hello Clicked!'),
//     doGoodbye: action('Goodbye Clicked!')
// }
