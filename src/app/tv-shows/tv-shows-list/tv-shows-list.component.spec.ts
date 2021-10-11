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
  it('dramarow', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.dramarow'));
    fixture.detectChanges();
  });
  it('dramacol', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.dramacol'));
    fixture.detectChanges();
  });
  it('actionrow', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.actionrow'));
    fixture.detectChanges();
  });
  it('actioncol', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.actioncol'));
    fixture.detectChanges();
  });
  it('comedyrow', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.comedyrow'));
    fixture.detectChanges();
  });
  it('comedycol', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.comedycol'));
    fixture.detectChanges();
  });
  it('noresults', () => {
    fixture.detectChanges();
    const element: ElementRef = fixture.debugElement.query(By.css('.noresults'));
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
