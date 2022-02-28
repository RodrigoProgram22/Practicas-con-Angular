import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaInputComponent } from './entrada-input.component';

describe('EntradaInputComponent', () => {
  let component: EntradaInputComponent;
  let fixture: ComponentFixture<EntradaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
