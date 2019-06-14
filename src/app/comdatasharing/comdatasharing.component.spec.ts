import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdatasharingComponent } from './comdatasharing.component';

describe('ComdatasharingComponent', () => {
  let component: ComdatasharingComponent;
  let fixture: ComponentFixture<ComdatasharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComdatasharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdatasharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
