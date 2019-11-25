import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingtrainingsComponent } from './ongoingtrainings.component';

describe('OngoingtrainingsComponent', () => {
  let component: OngoingtrainingsComponent;
  let fixture: ComponentFixture<OngoingtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
