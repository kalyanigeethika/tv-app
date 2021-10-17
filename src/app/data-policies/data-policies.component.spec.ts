import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataPoliciesComponent } from './data-policies.component';
import { By } from '@angular/platform-browser';
import { TvShowsListComponent } from '../tv-shows/tv-shows-list/tv-shows-list.component';
import { RouterLinkWithHref } from '@angular/router';

describe('DataPoliciesComponent', () => {
  let component: DataPoliciesComponent;
  let fixture: ComponentFixture<DataPoliciesComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '../tv-shows/tv-shows-list', component: TvShowsListComponent }
      ]), HttpClientTestingModule],
      declarations: [DataPoliciesComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(DataPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('queryAll', () => {
    it('li should display static data', () => {
      const elements = fixture.debugElement.queryAll(By.css('.dplist'));
      expect(elements[0].nativeElement.innerText.trim()).toEqual('Shows');
      expect(elements[1].nativeElement.innerText.trim()).toEqual('Genre Definitions');
      expect(elements[2].nativeElement.innerText.trim()).toEqual('Show extras');
      expect(elements[3].nativeElement.innerText.trim()).toEqual('Episodes');
      expect(elements[4].nativeElement.innerText.trim()).toEqual('Alternate Episodes');
      expect(elements[5].nativeElement.innerText.trim()).toEqual('Episode extras');
      expect(elements[6].nativeElement.innerText.trim()).toEqual('People');
      expect(elements[7].nativeElement.innerText.trim()).toEqual('Web Channels');
      expect(elements[8].nativeElement.innerText.trim()).toEqual('Show main images');
      expect(elements[9].nativeElement.innerText.trim()).toEqual('Show image general guidelines');
      expect(elements[10].nativeElement.innerText.trim()).toEqual('Episode and Character screencaps');
      expect(elements[11].nativeElement.innerText.trim()).toEqual('Summary/Biography text formatting');
      expect(elements[12].nativeElement.innerText.trim()).toEqual('News');
    });
  })
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '../tv-shows/tv-shows-list';
    });
    expect(index).toBeGreaterThan(-3);
  });
  it('should have a link to /', async(() => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '../tv-shows/tv-shows-list';
    });
    expect(index).toBeGreaterThan(-3);
  }));

});
