/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core'
};

export default {
  entry: '../../dist/packages-dist/platform/esm5/index.js',
  dest: '../../dist/packages-dist/platform/bundles/platform.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.platform',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals
};
