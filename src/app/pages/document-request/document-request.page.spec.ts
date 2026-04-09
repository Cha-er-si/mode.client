import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentRequestPage } from './document-request.page';

describe('DocumentRequestPage', () => {
  let component: DocumentRequestPage;
  let fixture: ComponentFixture<DocumentRequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
