import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSliderComponent } from './categorie-slider.component';

describe('CategorieSliderComponent', () => {
  let component: CategorieSliderComponent;
  let fixture: ComponentFixture<CategorieSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
