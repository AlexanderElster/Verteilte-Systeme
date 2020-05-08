import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminloeschenComponent } from './terminloeschen.component';

describe('TerminloeschenComponent', () => {
  let component: TerminloeschenComponent;
  let fixture: ComponentFixture<TerminloeschenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminloeschenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminloeschenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
