import { html } from 'lit-html';
import { withLinks } from '@storybook/addon-links';

export default {
  title: 'Welcome',
  decorators: [withLinks],
};

export const Welcome = () => html`
  <div class="main">
    <h1>Welcome to Storybook for LWC</h1>
    <p>This project shows how to integrate Storybook with LWC.</p>
`;
