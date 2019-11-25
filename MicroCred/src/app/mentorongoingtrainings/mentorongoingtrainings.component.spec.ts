import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorongoingtrainingsComponent } from './mentorongoingtrainings.component';

describe('MentorongoingtrainingsComponent', () => {
  let component: MentorongoingtrainingsComponent;
  let fixture: ComponentFixture<MentorongoingtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorongoingtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorongoingtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
