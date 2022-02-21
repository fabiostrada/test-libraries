import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModule1Component } from './sub-module1.component';

describe('SubModule1Component', () => {
  let component: SubModule1Component;
  let fixture: ComponentFixture<SubModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubModule1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
