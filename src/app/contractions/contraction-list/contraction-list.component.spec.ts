import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionListComponent } from './contraction-list.component';

import { ContractionService } from '../shared/contraction.service';

describe('ContractionListComponent', () => {
  let component: ContractionListComponent;
  let fixture: ComponentFixture<ContractionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule
      ],
      declarations: [ContractionListComponent],
      providers: [ContractionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contraction list component', () => {
    expect(component).toBeTruthy();
  });
});
