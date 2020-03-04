import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterPage } from './ajouter.page';

describe('AjouterPage', () => {
  let component: AjouterPage;
  let fixture: ComponentFixture<AjouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
