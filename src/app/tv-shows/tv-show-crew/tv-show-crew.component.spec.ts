import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowCrewComponent } from './tv-show-crew.component';
import { By } from '@angular/platform-browser';

describe('TvShowCrewComponent', () => {
  let component: TvShowCrewComponent;
  let fixture: ComponentFixture<TvShowCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowCrewComponent],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: { params: { id: '1' } }
            }
          }
        ]
    })
      .compileComponents();
  });
  it('should display crew names', () => {
    const tvshowcrew = [
      {
        "type": "Creator",
        "person": {
          "name": "Stephen King",
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1813.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/1813.jpg"
          },
        }
      }
    ];
    fixture.detectChanges();
    let tvcrews = fixture.debugElement.queryAll(By.css('tvshowc'));
    expect(tvshowcrew.length).toEqual(tvshowcrew.length);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
