import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopScreenPage } from './top-screen.page';

describe('TopScreenPage', () => {
  let component: TopScreenPage;
  let fixture: ComponentFixture<TopScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
