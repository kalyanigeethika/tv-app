import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { FooterComponent } from './footer.component';
import { DataPoliciesComponent } from '../../data-policies/data-policies.component';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { TosComponent } from '../../tos/tos.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'data-policies', component: DataPoliciesComponent },
        { path: 'privacy-policy', component: PrivacyPolicyComponent },
        { path: 'tos', component: TosComponent },
      ]), HttpClientTestingModule],
      declarations: [FooterComponent, DataPoliciesComponent, PrivacyPolicyComponent, TosComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/data-policies';
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/privacy-policy';
    });
    expect(index).toBeGreaterThan(-1);
  });
  describe('query', () => {
    it('should display the span text', () => {
      const element = fixture.debugElement.query(By.css('.foot'));
      expect(element.nativeElement.innerText.trim()).toEqual('Get connected with us on social networks:');
    });
  })
  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/tos';
    });
    expect(index).toBeGreaterThan(-1);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
