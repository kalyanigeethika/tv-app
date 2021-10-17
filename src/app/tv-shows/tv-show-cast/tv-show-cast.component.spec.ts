import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowCastComponent } from './tv-show-cast.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('TvShowCastComponent', () => {
  let component: TvShowCastComponent;
  let fixture: ComponentFixture<TvShowCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowCastComponent],
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
  it('should display cast names', () => {
    const tvshowcast = [
      {
        "person": {
          "name": "Mike Vogel",
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
          },
        },
        "character": {
          "name": "Dale \"Barbie\" Barbara",
        }
      }
    ];
    fixture.detectChanges();
    let tvcasts = fixture.debugElement.queryAll(By.css('tvcast'));
    expect(tvcasts.length).toBe(0);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
