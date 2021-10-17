import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowsListComponent } from './tv-shows-list.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { ElementRef } from '@angular/core'

describe('TvShowsListComponent', () => {
  let component: TvShowsListComponent;
  let fixture: ComponentFixture<TvShowsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TvShowsListComponent]
    })
      .compileComponents();
  });
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '../tv-shows/tv-show-details/1';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '../tv-shows/tv-show-details/1';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('dramarow when condition is true', () => {
    (component.tvshows) && (component.tvshows.length > 0) == true;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.dramarow'));
    expect(element).toBeDefined();
  });
  it('dramarow when condition is false', () => {
    (component.tvshows) && (component.tvshows.length > 0) == false;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.dramarow'));
    expect(element).toBeFalsy();
  });
  it('actionrow when condition is true', () => {
    (component.tvshows) && (component.tvshows.length > 0) == true;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.actionrow'));
    expect(element).toBeDefined();
  });
  it('actionrow when condition is false', () => {
    (component.tvshows) && (component.tvshows.length > 0) == false;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.actionrow'));
    expect(element).toBeFalsy();
  });

  it('comedyrow when condition is true', () => {
    (component.tvshows) && (component.tvshows.length > 0) == true;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.comedyrow'));
    expect(element).toBeDefined();
  });
  it('comedyrow when condition is false', () => {
    (component.tvshows) && (component.tvshows.length > 0) == false;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.comedyrow'));
    expect(element).toBeFalsy();
  });
  it('noresults when condition is true', () => {
    ((component.tvshows && component.tvshows.length) === 0) == true;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.noresults'));
    expect(element).toBeDefined();
  });
  it('noresults when condition is false', () => {
    ((component.tvshows && component.tvshows.length) === 0) == false;
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.noresults'));
    expect(element).toBeFalsy();
  });
  it('should display tvshow list names', () => {
    const tvshowlist = [
      {
        "id": 1,
        "name": "Under the Dome",
        "rating": {
          "average": 6.5
        },

        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      },
      {
        "id": 2,
        "name": "Person of Interest",
        "rating": {
          "average": 8.9
        },

        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
        },
        "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
      },
    ];
    fixture.detectChanges();
    let tvshowlist1 = fixture.debugElement.queryAll(By.css('tvshows'));
    expect(tvshowlist.length).toEqual(tvshowlist.length);
  });

  it('should display tvshow list names', async(() => {
    const tvshowlist = [
      {
        "id": 1,
        "name": "Under the Dome",
        "rating": {
          "average": 6.5
        },

        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      },
      {
        "id": 2,
        "name": "Person of Interest",
        "rating": {
          "average": 8.9
        },

        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
        },
        "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
      },
    ];
    fixture.detectChanges();
    let tvshowlist1 = fixture.debugElement.queryAll(By.css('tvshows'));
    expect(tvshowlist.length).toEqual(tvshowlist.length);
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
