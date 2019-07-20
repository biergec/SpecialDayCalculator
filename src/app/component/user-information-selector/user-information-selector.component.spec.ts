import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationSelectorComponent } from './user-information-selector.component';

describe('UserInformationSelectorComponent', () => {
  let component: UserInformationSelectorComponent;
  let fixture: ComponentFixture<UserInformationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
