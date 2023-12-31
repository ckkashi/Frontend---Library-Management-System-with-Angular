import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormComponent } from './books-form.component';

describe('BooksFormComponent', () => {
  let component: BooksFormComponent;
  let fixture: ComponentFixture<BooksFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksFormComponent]
    });
    fixture = TestBed.createComponent(BooksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
