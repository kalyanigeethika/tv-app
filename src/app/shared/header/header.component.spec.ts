import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { AllTvShowsComponent } from '../../all-tv-shows/all-tv-shows.component';
import { FormsModule, NgForm } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'all-tv-shows', component: AllTvShowsComponent }
      ]), HttpClientTestingModule, FormsModule],
      declarations: [HeaderComponent, AllTvShowsComponent],
      providers: [

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a text box to accept search name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="search"]')).toBeTruthy();
  });
  it('should call onsubmit method on form submit', () => {
    /*Get button from html*/
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // Supply id of your form below formID
    const getForm = fixture.debugElement.query(By.css('form'));
    expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();
  });
});
