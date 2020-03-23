import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DozentenlisteComponent } from './dozentenliste.component';

describe('DozentenlisteComponent', () => {
  let component: DozentenlisteComponent;
  let fixture: ComponentFixture<DozentenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DozentenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DozentenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
