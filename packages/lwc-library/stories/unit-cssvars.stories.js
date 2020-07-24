import { html } from 'lit-html';

export default {
    title: 'Patterns/3- CSS Vars',
    component: 'unit-cssvars'
};

export const DefaultEmpty = () => html`
    <unit-cssvars></unit-cssvars>
`;

export const DefaultWithArgs = ({message}) => html`
    <unit-cssvars
        message="${message}"
    >
    </unit-cssvars>
`;
DefaultWithArgs.args = {
    message: 'Hello, CSS Variables!',
}

export const SetVariables = ({message,...args}) => html`
    <style>
    .vars {
        --unit-border-width: ${args['--unit-border-width']};
        --unit-border-color: ${args['--unit-border-color']};
        --unit-text-color: ${args['--unit-text-color']};
        --unit-text-size: ${args['--unit-text-size']};
    }
    </style>
    <div class='vars'>
    <unit-cssvars
        message="${message}"
    >
    </unit-cssvars>
    </div>
`
;
SetVariables.args = {
    message: 'Hello, CSS Variables!',
    "--unit-border-width": '1px',
    "--unit-border-color": 'red',
    "--unit-text-color": 'green',
    "--unit-text-size": '20px',
}
