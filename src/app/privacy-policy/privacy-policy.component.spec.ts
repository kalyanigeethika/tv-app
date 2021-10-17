import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { TvShowsListComponent } from '../tv-shows/tv-shows-list/tv-shows-list.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '../tv-shows/tv-shows-list', component: TvShowsListComponent }
      ]), HttpClientTestingModule],
      declarations: [PrivacyPolicyComponent]
    })
      .compileComponents();
  });
  describe('query', () => {
    it('should display the Privacy Policy text', () => {
      const element = fixture.debugElement.query(By.css('#pp'));
      expect(element.nativeElement.innerText.trim()).toEqual('Privacy Policy');
    });
  })
  describe('query', () => {
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp1'));
      expect(element.nativeElement.innerText.trim()).toEqual("TVmaze itself aims to collect as little identifiable information about you as possible. For guest visitors (not logged in) we don't track any personal information at all, for registered users we only store your email and IP address for the purpose of preventing spam. A cookie may be set for no other purpose than to keep you logged in. TVmaze uses Matomo (Piwik) to gather analytics about the site's usage. In Matomo we only archive aggregate data that can't be traced back to individual users.");
    });
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp3'));
      expect(element.nativeElement.innerText.trim()).toEqual("For users with a premium account all such external services are disabled.");
    });
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp4'));
      expect(element.nativeElement.innerText.trim()).toEqual("As a registered user, you can leave feedback on the site in the form of comments or forum posts. Please keep in mind that any such feedback is publicly accessible.");
    });
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp5'));
      expect(element.nativeElement.innerText.trim()).toEqual("As a registered user, you can make changes to the information on this site, such as creating or editing Shows, Persons, Networks, and related information. A log of such edits will be kept for the purpose of preventing vandalism.");
    });
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
