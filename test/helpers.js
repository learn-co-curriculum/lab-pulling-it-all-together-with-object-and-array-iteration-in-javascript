const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('fs')
const path = require('path')
const assert = require('assert');
const babel = require('@babel/core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

// Use Babel to transform the code
const babelResult = babel.transformSync(js, {
    presets: ['@babel/preset-env']
});
const src = babelResult.code

require('jsdom-global')(html);
eval(src); //run your transpiled JS inside the JSDOM environment


module.exports = {
    assert,
    chai,
    sinon,
    fs,
    path,
    babel,
    html,
    babelResult,
    src,
    js
};