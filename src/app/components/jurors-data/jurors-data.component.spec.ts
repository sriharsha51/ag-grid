import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurorsDataComponent } from './jurors-data.component';

describe('JurorsDataComponent', () => {
  let component: JurorsDataComponent;
  let fixture: ComponentFixture<JurorsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurorsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurorsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
