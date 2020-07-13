/* eslint-env node */
'use strict';

import path from 'path';
import fs from 'fs';
import lwcRollUpPlugin from '@lwc/rollup-plugin';

import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupCommonjs from '@rollup/plugin-commonjs';
import syntheticShadow from './plugins/synthetic-shadow';

// Prepare directory modules
const lwcConfigJsonFile = path.resolve(__dirname, '..', 'lwc.config.json');
const lwcConfigJson = JSON.parse(fs.readFileSync(lwcConfigJsonFile, 'utf-8'));
const lwcConfigJsonEffective = lwcConfigJson.modules.reduce((acc, mod) => {
    if (mod.dir) {
        mod.dir = `../${mod.dir}`;
    }
    acc.push(mod);
    return acc;
}, []);


function rollupConfig() {
    return {
        input: path.resolve(__dirname, '..', 'stories', 'index'),
        output: {
            file: path.join(__dirname, 'build', 'main-storybook.js'),
            format: 'esm',
        },
        plugins: [
            syntheticShadow(),
            lwcRollUpPlugin({
                modules: lwcConfigJsonEffective
            }),
            rollupNodeResolve(),
            rollupCommonjs(),
        ].filter(Boolean),
        watch: {
            exclude: ['node_modules/**'],
        },
    };
}

module.exports = [
    rollupConfig(),
];
