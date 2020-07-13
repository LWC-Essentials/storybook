'use strict';

const path = require('path');

const replace = require('@rollup/plugin-replace');
const lwcCompiler = require('@lwc/rollup-plugin');
const { terser } = require('rollup-plugin-terser');
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;

const env = process.env.NODE_ENV || 'development';

const input = path.resolve(__dirname, '../src/main.js');
const outputDir = path.resolve(__dirname, '../public');

function rollupConfig({ target }) {
    const isProduction = env === 'production';

    return {
        input,
        output: {
            file: path.join(outputDir, 'library.js'),
            format: 'iife',
        },
        plugins: [
            resolve({
                mainFields: ['module', 'main'],
                browser: true,
            }),
            lwcCompiler(),
            replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
            isProduction && terser()
        ].filter(Boolean)
    }
}


const exports = [
    rollupConfig({ target: 'es2017' })
];

module.exports = exports;
