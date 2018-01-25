import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ContractionSummaryComponent } from './contraction-summary.component';

import { TimePipe } from 'app/shared/time.pipe';

describe('ContractionSummaryComponent', () => {
  let component: ContractionSummaryComponent;
  let fixture: ComponentFixture<ContractionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule
      ],
      declarations: [
        ContractionSummaryComponent,
        TimePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
