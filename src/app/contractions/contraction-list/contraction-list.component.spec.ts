import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionListComponent } from './contraction-list.component';

describe('ContractionListComponent', () => {
  let component: ContractionListComponent;
  let fixture: ComponentFixture<ContractionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
