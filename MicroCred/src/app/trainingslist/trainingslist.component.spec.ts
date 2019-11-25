import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingslistComponent } from './trainingslist.component';

describe('TrainingslistComponent', () => {
  let component: TrainingslistComponent;
  let fixture: ComponentFixture<TrainingslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
