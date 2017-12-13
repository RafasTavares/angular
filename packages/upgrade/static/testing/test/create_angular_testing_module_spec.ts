/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Injector} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {$INJECTOR} from '../../src/common/constants';
import {createAngularTestingModule} from '../public_api';

import {AppModule, Inventory, appModule, serverRequestInstance} from './mocks';


export function main() {
  describe('Angular entry point', () => {
    beforeEach(() => {
      // Configure an NgModule that has the Angular and AngularJS injectors wired up
      TestBed.configureTestingModule(
          {imports: [createAngularTestingModule([appModule.name]), AppModule]});
    });

    it('should allow us to get an upgraded AngularJS service from an Angular service', () => {
      const inventory = TestBed.get(Inventory) as Inventory;
      expect(inventory.serverRequest).toBe(serverRequestInstance);
    });

    it('should create new injectors when we re-use the helper', () => {
      const injector = TestBed.get(Injector);
      const $injector = TestBed.get($INJECTOR);

      TestBed.resetTestingModule();
      TestBed.configureTestingModule(
          {imports: [createAngularTestingModule([appModule.name]), AppModule]});

      expect(TestBed.get(Injector)).not.toBe(injector);
      expect(TestBed.get($INJECTOR)).not.toBe($injector);
    });
  });
}
