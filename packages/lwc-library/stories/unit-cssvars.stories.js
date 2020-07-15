import { html } from 'lit-html';

export default {
    title: 'Units/3- CSS Vars',
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

export const SetVariables = ({message,unitBorderWidth,unitBorderColor,unitTextColor,unitTextSize}) => {
    return html`
        <style>
            .vars {
                --unit-border-width: ${unitBorderWidth};
                --unit-border-color: ${unitBorderColor};
                --unit-text-color: ${unitTextColor};
                --unit-text-size: ${unitTextSize};
            }
        </style>
        <div class='vars'>
            <unit-cssvars
                message="${message}"
            >
            </unit-cssvars>
        </div>
    `
};
SetVariables.args = {
    message: 'Hello, CSS Variables!',
    unitBorderWidth: '1px',
    unitBorderColor: 'red',
    unitTextColor: 'green',
    unitTextSize: '20px'
}
