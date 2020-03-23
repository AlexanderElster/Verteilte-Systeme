import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeudozentComponent } from './neudozent.component';

describe('NeudozentComponent', () => {
  let component: NeudozentComponent;
  let fixture: ComponentFixture<NeudozentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeudozentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeudozentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
