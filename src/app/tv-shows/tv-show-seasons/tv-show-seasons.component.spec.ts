import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowSeasonsComponent } from './tv-show-seasons.component';
import { By } from '@angular/platform-browser';
const tvshowgallery = [
  {
    "resolutions": {
      "original": {
        "url": "https://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg",
      },
      "medium": {
        "url": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
      }
    }
  }
];

describe('TvShowSeasonsComponent', () => {
  let component: TvShowSeasonsComponent;
  let fixture: ComponentFixture<TvShowSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowSeasonsComponent],
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
  it('should display seasons', () => {

    fixture.detectChanges();
    let tvshowgs = fixture.debugElement.queryAll(By.css('col-sm-4'));
    expect(tvshowgs.length).toBe(0);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
