import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirproductoComponent } from './anyadirproducto.component';

describe('AnyadirproductoComponent', () => {
  let component: AnyadirproductoComponent;
  let fixture: ComponentFixture<AnyadirproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnyadirproductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyadirproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
