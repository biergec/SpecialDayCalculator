import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDayInformationCalculateComponent } from './user-day-information-calculate.component';

describe('UserDayInformationCalculateComponent', () => {
  let component: UserDayInformationCalculateComponent;
  let fixture: ComponentFixture<UserDayInformationCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDayInformationCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDayInformationCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
