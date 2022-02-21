import { TestBed } from '@angular/core/testing';

import { SubModule2Service } from './sub-module2.service';

describe('SubModule2Service', () => {
  let service: SubModule2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubModule2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
