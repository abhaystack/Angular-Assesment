import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDetailComponent } from './side-detail.component';

describe('SideDetailComponent', () => {
  let component: SideDetailComponent;
  let fixture: ComponentFixture<SideDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideDetailComponent]
    });
    fixture = TestBed.createComponent(SideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
