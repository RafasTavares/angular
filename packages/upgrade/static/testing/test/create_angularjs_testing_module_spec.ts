/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {createAngularJSTestingModule} from '../public_api';

import {AppModule, Inventory, appModule} from './mocks';


// We have to get the `mock` object from the global `angular` variable, rather than trying to import
// it from `@angular/upgrade/src/common/angular1`, because that file doesn't export `ngMock`
// helpers.
const {module, inject} = (window as any).angular.mock;

export function main() {
  describe('AngularJS entry point', () => {

    // Configure an AngularJS module that has the AngularJS and Angular injector wired up
    beforeEach(module(createAngularJSTestingModule([AppModule])));
    // Load the AngularJS bits of the application
    beforeEach(module(appModule.name));

    it('should allow us to get a downgraded Angular service from an AngularJS service',
       inject(function(shoppingCart: any) {
         expect(shoppingCart.inventory).toEqual(jasmine.any(Inventory));
       }));
  });
}
