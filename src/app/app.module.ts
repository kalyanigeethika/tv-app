import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllTvShowsComponent } from './all-tv-shows/all-tv-shows.component';
import { FormsModule } from '@angular/forms';
import { DataPoliciesComponent } from './data-policies/data-policies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TosComponent } from './tos/tos.component';
import { TvShowsService } from './services/tv-shows.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllTvShowsComponent,
    DataPoliciesComponent,
    PrivacyPolicyComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [TvShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
