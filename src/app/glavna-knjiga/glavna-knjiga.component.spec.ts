import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavnaKnjigaComponent } from './glavna-knjiga.component';

describe('GlavnaKnjigaComponent', () => {
  let component: GlavnaKnjigaComponent;
  let fixture: ComponentFixture<GlavnaKnjigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlavnaKnjigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlavnaKnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
