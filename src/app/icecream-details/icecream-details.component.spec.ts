import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamDetailsComponent } from './icecream-details.component';

describe('IcecreamDetailsComponent', () => {
  let component: IcecreamDetailsComponent;
  let fixture: ComponentFixture<IcecreamDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecreamDetailsComponent]
    });
    fixture = TestBed.createComponent(IcecreamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
