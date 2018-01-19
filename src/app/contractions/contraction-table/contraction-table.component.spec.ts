import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionTableComponent } from './contraction-table.component';

import { ContractionService } from '../shared/contraction.service';

describe('ContractionTableComponent', () => {
  let component: ContractionTableComponent;
  let fixture: ComponentFixture<ContractionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        MatTableModule
      ],
      declarations: [ContractionTableComponent],
      providers: [ContractionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contraction list component', () => {
    expect(component).toBeTruthy();
  });
});
