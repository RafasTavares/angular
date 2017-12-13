/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const resolve = require('rollup-plugin-node-resolve');
const sourcemaps = require('rollup-plugin-sourcemaps');

const globals = {
  '@angular/core': 'ng.core',
  '@angular/core/testing': 'ng.core.testing',
};

module.exports = {
  entry: '../../../../dist/packages-dist/upgrade/esm5/static/testing.js',
  dest: '../../../../dist/packages-dist/upgrade/bundles/upgrade-static-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@angular/upgrade/static/testing'},
  moduleName: 'ng.upgrade.static.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
