import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuveranstaltungComponent } from './neuveranstaltung.component';

describe('NeuveranstaltungComponent', () => {
  let component: NeuveranstaltungComponent;
  let fixture: ComponentFixture<NeuveranstaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuveranstaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuveranstaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
