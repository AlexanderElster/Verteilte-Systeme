import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuvorlesungsterminComponent } from './neuvorlesungstermin.component';

describe('NeuvorlesungsterminComponent', () => {
  let component: NeuvorlesungsterminComponent;
  let fixture: ComponentFixture<NeuvorlesungsterminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuvorlesungsterminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuvorlesungsterminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
