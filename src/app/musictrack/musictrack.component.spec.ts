import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusictrackComponent } from './musictrack.component';

describe('MusictrackComponent', () => {
  let component: MusictrackComponent;
  let fixture: ComponentFixture<MusictrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusictrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusictrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
