/*
 * This file is going to be picked up by `rollup` during the `storybook:build` phase. It prepares
 * all components to be available when finally the `storybook:start` phase brings up the storybook
 * server.
 */
import buildAndRegisterCustomElement from '../.storybook/utils/build-custom-element';
import HelloWorld from 'hello/world';
import HelloGreetings from 'hello/greetings';
import HelloTime from 'hello/time';

import UnitAttrs from 'unit/attrs';
import UnitProps from 'unit/props';
import UnitCssVars from 'unit/cssvars';
import UnitJsDoc from 'unit/jsdoc';
import UnitEvents from 'unit/events';
import UnitInherit from 'unit/inherit';
import UnitInherit2 from 'unit/inherit2';
import UnitSlots from 'unit/slots';
import WcUnitSlots from 'wc/unit-slots';

import WcTime from 'wc/time';


// Register components
buildAndRegisterCustomElement('hello-world', HelloWorld);
buildAndRegisterCustomElement('hello-time', HelloTime);
buildAndRegisterCustomElement('hello-greetings', HelloGreetings);

buildAndRegisterCustomElement('wc-time', WcTime);

buildAndRegisterCustomElement('unit-attrs', UnitAttrs);
buildAndRegisterCustomElement('unit-props', UnitProps);
buildAndRegisterCustomElement('unit-cssvars', UnitCssVars);
buildAndRegisterCustomElement('unit-jsdoc', UnitJsDoc);
buildAndRegisterCustomElement('unit-events', UnitEvents);
buildAndRegisterCustomElement('unit-inherit', UnitInherit);
buildAndRegisterCustomElement('unit-inherit2', UnitInherit2);
buildAndRegisterCustomElement('unit-slots', UnitSlots);
buildAndRegisterCustomElement('wc-unit-slots', WcUnitSlots);
