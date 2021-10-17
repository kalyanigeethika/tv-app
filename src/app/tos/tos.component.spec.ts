import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { TosComponent } from './tos.component';

describe('TosComponent', () => {
  let component: TosComponent;
  let fixture: ComponentFixture<TosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [TosComponent]
    })
      .compileComponents();
  });
  describe('query', () => {
    it('should display the Terms of Service text', () => {
      const element = fixture.debugElement.query(By.css('.tos'));
      expect(element.nativeElement.innerText.trim()).toEqual('Terms of Service');
    });
  })
  describe('query', () => {
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp1'));
      expect(element.nativeElement.innerText.trim()).toEqual("While using TVmaze, you agree not to partake in any acts that are illegal in your own jurisdiction; the United States; or the European Union.");
    });
    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp2'));
      expect(element.nativeElement.innerText.trim()).toEqual("By submitting content to TVmaze, you grant us the indefinite right to use this content in any way we see fit. However, TVmaze doesn't claim copyright on any submitted content.");
    });

    it('should display the paragraph text', () => {
      const element = fixture.debugElement.query(By.css('.pp3'));
      expect(element.nativeElement.innerText.trim()).toEqual("The TVmaze Premium order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.");
    });
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(TosComponent);
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
