import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmentorprofileComponent } from './editmentorprofile.component';

describe('EditmentorprofileComponent', () => {
  let component: EditmentorprofileComponent;
  let fixture: ComponentFixture<EditmentorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmentorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmentorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
