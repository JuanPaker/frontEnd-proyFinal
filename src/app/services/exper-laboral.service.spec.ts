import { TestBed } from '@angular/core/testing';

import { ExperLaboralService } from './exper-laboral.service';

describe('ExperLaboralService', () => {
  let service: ExperLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
