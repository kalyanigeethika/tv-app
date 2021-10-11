import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowEpisodesComponent } from './tv-show-episodes.component';
import { By } from '@angular/platform-browser';

describe('TvShowEpisodesComponent', () => {
  let component: TvShowEpisodesComponent;
  let fixture: ComponentFixture<TvShowEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowEpisodesComponent],
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
  it('should display episodes', () => {
    const tvshoweps = [
      {
        "name": "Pilot",
        "number": 1,
        "airdate": "2013-06-24",
      },
      {
        "name": "The Fire",
        "number": 2,
        "airdate": "2013-07-01",
      },
    ];
    fixture.detectChanges();
    let tveps = fixture.debugElement.queryAll(By.css('tvshowep'));
    expect(tveps.length).toBe(0);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
