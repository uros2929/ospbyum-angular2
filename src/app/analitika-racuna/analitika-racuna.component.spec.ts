import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalitikaRacunaComponent } from './analitika-racuna.component';

describe('AnalitikaRacunaComponent', () => {
  let component: AnalitikaRacunaComponent;
  let fixture: ComponentFixture<AnalitikaRacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalitikaRacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalitikaRacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
