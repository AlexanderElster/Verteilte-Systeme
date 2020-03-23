import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedozentComponent } from './updatedozent.component';

describe('UpdatedozentComponent', () => {
  let component: UpdatedozentComponent;
  let fixture: ComponentFixture<UpdatedozentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedozentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedozentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
