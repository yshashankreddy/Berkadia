import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountitemsComponent } from './countitems.component';

describe('CountitemsComponent', () => {
  let component: CountitemsComponent;
  let fixture: ComponentFixture<CountitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
