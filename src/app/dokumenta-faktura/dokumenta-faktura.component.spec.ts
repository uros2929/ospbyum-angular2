import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentaFakturaComponent } from './dokumenta-faktura.component';

describe('DokumentaFakturaComponent', () => {
  let component: DokumentaFakturaComponent;
  let fixture: ComponentFixture<DokumentaFakturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumentaFakturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentaFakturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
