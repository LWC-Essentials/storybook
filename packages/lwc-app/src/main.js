/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/
import { buildCustomElementConstructor } from 'lwc';

//import "@lwc/synthetic-shadow"

// Uncomment the code bellow if you want to use wore adapters
// /* eslint-disable no-undef */
// import { register } from "lwc";

// // The wire service has to be registered once
// import { registerWireService } from 'wire-service';
// registerWireService(register)


// Import the main component and register it as a custom element
import Main from "app/main";
customElements.define("app-main", buildCustomElementConstructor(Main));
