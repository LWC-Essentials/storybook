/*
 * This file is going to be picked up by `rollup` during the `storybook:build` phase. It prepares
 * all components to be available when finally the `storybook:start` phase brings up the storybook
 * server.
 */
import buildAndRegisterCustomElement from '../.storybook/utils/build-custom-element';
import HelloWorld from 'hello/world';
import HelloGreetings from 'hello/greetings';

buildAndRegisterCustomElement('hello-world', HelloWorld);
buildAndRegisterCustomElement('hello-greetings', HelloGreetings);
