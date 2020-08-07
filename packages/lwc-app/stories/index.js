/*
 * This file is going to be picked up by `rollup` during the `storybook:build` phase. It prepares
 * all components to be available when finally the `storybook:start` phase brings up the storybook
 * server.
 */
import buildAndRegisterCustomElement from '../.storybook/utils/build-custom-element';
import AppMain from 'app/main';

import Inherit3 from 'unit/inherit3';

// Register components
buildAndRegisterCustomElement('app-main', AppMain);

buildAndRegisterCustomElement('unit-inherit3', Inherit3);
