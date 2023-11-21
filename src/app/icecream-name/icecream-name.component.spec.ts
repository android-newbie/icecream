import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamNameComponent } from './icecream-name.component';

describe('IcecreamNameComponent', () => {
  let component: IcecreamNameComponent;
  let fixture: ComponentFixture<IcecreamNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecreamNameComponent]
    });
    fixture = TestBed.createComponent(IcecreamNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
