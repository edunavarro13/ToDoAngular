import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTareaComponent } from './card-tarea.component';

describe('CardTareaComponent', () => {
  let component: CardTareaComponent;
  let fixture: ComponentFixture<CardTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
