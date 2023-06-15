import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesTabComponent } from './roles-tab.component';

describe('RolesTabComponent', () => {
  let component: RolesTabComponent;
  let fixture: ComponentFixture<RolesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesTabComponent]
    });
    fixture = TestBed.createComponent(RolesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
