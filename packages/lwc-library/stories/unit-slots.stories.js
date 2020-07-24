import { html } from 'lit-html';

export default {
    title: 'Patterns/5- Slots',
    component: 'unit-slots'
};

export const EmptySlots = () => html`
    <unit-slots></unit-slots>
`;

export const FilledSlots = ({headerContent,bodyContent,footerContent}) => html`
    <wc-unit-slots
        header-content=${headerContent}
        body-content=${bodyContent}
        footer-content=${footerContent}
    ></wc-unit-slots>
`;
FilledSlots.args = {
    headerContent: 'My Header',
    bodyContent: 'My Body',
    footerContent: 'My Footer'
}
