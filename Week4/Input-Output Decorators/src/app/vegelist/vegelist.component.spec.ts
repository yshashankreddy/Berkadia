import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegelistComponent } from './vegelist.component';

describe('VegelistComponent', () => {
  let component: VegelistComponent;
  let fixture: ComponentFixture<VegelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
