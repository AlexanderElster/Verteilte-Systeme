import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeukursComponent } from './neukurs.component';

describe('NeukursComponent', () => {
  let component: NeukursComponent;
  let fixture: ComponentFixture<NeukursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeukursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeukursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
