import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaPrijavaComponent } from './registracija-prijava.component';

describe('RegistracijaPrijavaComponent', () => {
  let component: RegistracijaPrijavaComponent;
  let fixture: ComponentFixture<RegistracijaPrijavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistracijaPrijavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaPrijavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
