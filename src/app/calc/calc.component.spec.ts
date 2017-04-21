import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from 'app/calc/calc.component';
import {NoopAnimationsModule, BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcComponent ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
