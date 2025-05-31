import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidenciaComponent } from './presidencia.component';

describe('PresidenciaComponent', () => {
  let component: PresidenciaComponent;
  let fixture: ComponentFixture<PresidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
