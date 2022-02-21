import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModule2Component } from './sub-module2.component';

describe('SubModule2Component', () => {
  let component: SubModule2Component;
  let fixture: ComponentFixture<SubModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubModule2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
