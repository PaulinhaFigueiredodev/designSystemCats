import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatButton } from './cat-button';

describe('CatButton', () => {
  let component: CatButton;
  let fixture: ComponentFixture<CatButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CatButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
