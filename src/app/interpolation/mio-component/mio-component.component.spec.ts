import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioComponentComponent } from './mio-component.component';

describe('MioComponentComponent', () => {
  let component: MioComponentComponent;
  let fixture: ComponentFixture<MioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
