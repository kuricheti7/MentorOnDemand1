import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtrainingsComponent } from './completedtrainings.component';

describe('CompletedtrainingsComponent', () => {
  let component: CompletedtrainingsComponent;
  let fixture: ComponentFixture<CompletedtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
