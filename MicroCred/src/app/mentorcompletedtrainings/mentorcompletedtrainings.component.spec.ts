import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings.component';

describe('MentorcompletedtrainingsComponent', () => {
  let component: MentorcompletedtrainingsComponent;
  let fixture: ComponentFixture<MentorcompletedtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcompletedtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcompletedtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
