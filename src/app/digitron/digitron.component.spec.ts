import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitronComponent } from './digitron.component';

describe('DigitronComponent', () => {
  let component: DigitronComponent;
  let fixture: ComponentFixture<DigitronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
