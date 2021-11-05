import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAtletiComponent } from './modifica-atleti.component';

describe('ModificaAtletiComponent', () => {
  let component: ModificaAtletiComponent;
  let fixture: ComponentFixture<ModificaAtletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaAtletiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaAtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
