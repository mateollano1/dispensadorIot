import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensadorComponent } from './dispensador.component';

describe('DispensadorComponent', () => {
  let component: DispensadorComponent;
  let fixture: ComponentFixture<DispensadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
