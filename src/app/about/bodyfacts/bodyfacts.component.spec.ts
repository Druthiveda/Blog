import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfactsComponent } from './bodyfacts.component';

describe('BodyfactsComponent', () => {
  let component: BodyfactsComponent;
  let fixture: ComponentFixture<BodyfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyfactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
