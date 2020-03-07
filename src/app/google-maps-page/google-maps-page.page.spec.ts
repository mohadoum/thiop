import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleMapsPagePage } from './google-maps-page.page';

describe('GoogleMapsPagePage', () => {
  let component: GoogleMapsPagePage;
  let fixture: ComponentFixture<GoogleMapsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleMapsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
