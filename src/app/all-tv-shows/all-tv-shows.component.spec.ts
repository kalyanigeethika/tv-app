import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AllTvShowsComponent } from './all-tv-shows.component';
import { TvShowsListComponent } from '../tv-shows/tv-shows-list/tv-shows-list.component';
import { TvShowDetailsComponent } from '../tv-shows/tv-show-details/tv-show-details.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { ElementRef } from '@angular/core'

describe('AllTvShowsComponent', () => {
  let component: AllTvShowsComponent;
  let fixture: ComponentFixture<AllTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '../tv-shows/tv-show-details/:id', component: TvShowDetailsComponent },
        { path: '../tv-shows/tv-shows-list', component: TvShowsListComponent },
      ]), HttpClientTestingModule],
      declarations: [AllTvShowsComponent, TvShowDetailsComponent, TvShowsListComponent],
      schemas: [NO_ERRORS_SCHEMA]
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
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '../tv-shows/tv-shows-list';
    });
    expect(index).toBeGreaterThan(-2);
  });
  it('tvrow', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.tvrow'));
    fixture.detectChanges();
  });
  it('tvrow', async(() => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.tvrow'));
    fixture.detectChanges();
  }));
  it('noresults', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.noresults'));
    fixture.detectChanges();
  });
  it('noresults', async(() => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.noresults'));
    fixture.detectChanges();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AllTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
