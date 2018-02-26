import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonJurorsComponent } from './summon-jurors.component';

describe('SummonJurorsComponent', () => {
  let component: SummonJurorsComponent;
  let fixture: ComponentFixture<SummonJurorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonJurorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonJurorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
