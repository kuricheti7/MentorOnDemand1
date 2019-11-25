import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplytrainingComponent } from './applytraining.component';

describe('ApplytrainingComponent', () => {
  let component: ApplytrainingComponent;
  let fixture: ComponentFixture<ApplytrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplytrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
