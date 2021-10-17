import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowGalleryComponent } from './tv-show-gallery.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('TvShowGalleryComponent', () => {
  let component: TvShowGalleryComponent;
  let fixture: ComponentFixture<TvShowGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowGalleryComponent],
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

  it('should display gallery images', () => {
    const tvshowgallery = [
      {
        "id": 1,
        "type": "poster",
        "main": false,
        "resolutions": {
          "original": {
            "url": "https://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg",
            "width": 680,
            "height": 1000
          },
          "medium": {
            "url": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
            "width": 210,
            "height": 295
          }
        }
      }
    ];
    fixture.detectChanges();
    let tvgallery = fixture.debugElement.queryAll(By.css('tvshowgallery'));
    expect(tvshowgallery.length).toEqual(1);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
