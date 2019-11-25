import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordboComponent } from './mentordbo.component';

describe('MentordboComponent', () => {
  let component: MentordboComponent;
  let fixture: ComponentFixture<MentordboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentordboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentordboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
