/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApartmentsService } from './apartments.service';

describe('Service: Apartments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentsService]
    });
  });

  it('should ...', inject([ApartmentsService], (service: ApartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
