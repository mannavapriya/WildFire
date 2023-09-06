import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildFiresComponent } from './wild-fires.component';

describe('WildFiresComponent', () => {
  let component: WildFiresComponent;
  let fixture: ComponentFixture<WildFiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildFiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildFiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
