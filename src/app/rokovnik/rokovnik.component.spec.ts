import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RokovnikComponent } from './rokovnik.component';

describe('RokovnikComponent', () => {
  let component: RokovnikComponent;
  let fixture: ComponentFixture<RokovnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RokovnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RokovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
