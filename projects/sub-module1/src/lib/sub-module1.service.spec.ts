import { TestBed } from '@angular/core/testing';

import { SubModule1Service } from './sub-module1.service';

describe('SubModule1Service', () => {
  let service: SubModule1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubModule1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
