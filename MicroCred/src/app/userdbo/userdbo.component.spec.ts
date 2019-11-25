import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdboComponent } from './userdbo.component';

describe('UserdboComponent', () => {
  let component: UserdboComponent;
  let fixture: ComponentFixture<UserdboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
