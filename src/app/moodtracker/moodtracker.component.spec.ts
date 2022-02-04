import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodtrackerComponent } from './moodtracker.component';

describe('MoodtrackerComponent', () => {
  let component: MoodtrackerComponent;
  let fixture: ComponentFixture<MoodtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodtrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
