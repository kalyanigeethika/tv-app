import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowDetailsParentComponent } from './tv-show-details-parent.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { TvShowCastComponent } from '../tv-show-cast/tv-show-cast.component';
import { TvShowCrewComponent } from '../tv-show-crew/tv-show-crew.component';
import { TvShowEpisodesComponent } from '../tv-show-episodes/tv-show-episodes.component';
import { TvShowGalleryComponent } from '../tv-show-gallery/tv-show-gallery.component';
import { TvShowSeasonsComponent } from '../tv-show-seasons/tv-show-seasons.component';

describe('TvShowDetailsParentComponent', () => {
  let component: TvShowDetailsParentComponent;
  let fixture: ComponentFixture<TvShowDetailsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'tv-show-cast', component: TvShowCastComponent },
        { path: 'tv-show-crew', component: TvShowCrewComponent },
        { path: 'tv-show-episodes', component: TvShowEpisodesComponent },
        { path: 'tv-show-gallery', component: TvShowGalleryComponent },
        { path: 'tv-show-seasons', component: TvShowSeasonsComponent }
      ]), HttpClientTestingModule],
      declarations: [TvShowDetailsParentComponent, TvShowCastComponent, TvShowCrewComponent, TvShowEpisodesComponent, TvShowGalleryComponent, TvShowSeasonsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-cast';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-cast';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-crew';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-crew';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-details';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-details';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-episodes';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-episodes';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-gallery';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-gallery';
    });
    expect(index).toBeGreaterThan(-3);
  }));
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-seasons';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tv-show-seasons';
    });
    expect(index).toBeGreaterThan(-3);
  }));
});
