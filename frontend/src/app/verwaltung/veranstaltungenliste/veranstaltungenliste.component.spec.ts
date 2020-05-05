import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungenlisteComponent } from './veranstaltungenliste.component';

describe('VeranstaltungenlisteComponent', () => {
  let component: VeranstaltungenlisteComponent;
  let fixture: ComponentFixture<VeranstaltungenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeranstaltungenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
