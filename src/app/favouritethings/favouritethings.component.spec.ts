import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritethingsComponent } from './favouritethings.component';

describe('FavouritethingsComponent', () => {
  let component: FavouritethingsComponent;
  let fixture: ComponentFixture<FavouritethingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritethingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritethingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
