import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstatesComponent } from './allstates.component';

describe('AllstatesComponent', () => {
  let component: AllstatesComponent;
  let fixture: ComponentFixture<AllstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
