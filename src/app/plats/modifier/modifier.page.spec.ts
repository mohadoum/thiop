import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierPage } from './modifier.page';

describe('ModifierPage', () => {
  let component: ModifierPage;
  let fixture: ComponentFixture<ModifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
