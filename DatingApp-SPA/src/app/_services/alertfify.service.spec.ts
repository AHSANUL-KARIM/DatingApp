/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertfifyService } from './alertfify.service';

describe('Service: Alertfify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertfifyService]
    });
  });

  it('should ...', inject([AlertfifyService], (service: AlertfifyService) => {
    expect(service).toBeTruthy();
  }));
});
