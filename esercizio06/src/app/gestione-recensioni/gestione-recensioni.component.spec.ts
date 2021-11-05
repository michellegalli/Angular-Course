import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneRecensioniComponent } from './gestione-recensioni.component';

describe('GestioneRecensioniComponent', () => {
  let component: GestioneRecensioniComponent;
  let fixture: ComponentFixture<GestioneRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneRecensioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
