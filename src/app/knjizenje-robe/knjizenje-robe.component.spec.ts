import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjizenjeRobeComponent } from './knjizenje-robe.component';

describe('KnjizenjeRobeComponent', () => {
  let component: KnjizenjeRobeComponent;
  let fixture: ComponentFixture<KnjizenjeRobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjizenjeRobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjizenjeRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
