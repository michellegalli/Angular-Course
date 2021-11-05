import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAlbumComponent } from './gestione-album.component';

describe('GestioneAlbumComponent', () => {
  let component: GestioneAlbumComponent;
  let fixture: ComponentFixture<GestioneAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
