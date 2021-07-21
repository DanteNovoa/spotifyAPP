import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisstaComponent } from './artissta.component';

describe('ArtisstaComponent', () => {
  let component: ArtisstaComponent;
  let fixture: ComponentFixture<ArtisstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisstaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
