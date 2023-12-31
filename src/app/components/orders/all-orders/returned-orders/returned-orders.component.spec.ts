import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedOrdersComponent } from './returned-orders.component';

describe('ReturnedOrdersComponent', () => {
  let component: ReturnedOrdersComponent;
  let fixture: ComponentFixture<ReturnedOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnedOrdersComponent]
    });
    fixture = TestBed.createComponent(ReturnedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
