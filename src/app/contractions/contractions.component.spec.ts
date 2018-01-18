import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';

import { ContractionService } from './shared/contraction.service';

describe('ContractionsComponent', () => {
  let component: ContractionsComponent;
  let fixture: ComponentFixture<ContractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule
      ],
      declarations: [
        ContractionTimerComponent,
        ContractionsComponent
      ],
      providers: [ContractionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contractions component', () => {
    expect(component).toBeTruthy();
  });
});
