import { TestBed } from '@angular/core/testing';

import { ValidatePhoneNumberService } from './validate-phone-number.service';

describe('ValidatePhoneNumberService', () => {
  let service: ValidatePhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatePhoneNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
