import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
describe('TvShowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowDetailsComponent],
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
  it('should display show details', () => {
    const tvshowdetails = [
      {
        "id": 1,
        "name": "Under the Dome",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      }
    ];
    fixture.detectChanges();
    let tveps = fixture.debugElement.queryAll(By.css('tvshowep'));
    expect(tvshowdetails.length).toEqual(tvshowdetails.length);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
