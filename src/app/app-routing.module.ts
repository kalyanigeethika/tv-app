import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTvShowsComponent } from './all-tv-shows/all-tv-shows.component';
import { DataPoliciesComponent } from './data-policies/data-policies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  //By default home page will navigate to tv show module by lazy loading concept
  {
    path: '',
    loadChildren: () => import('./tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  },
  //By default home page will navigate to tv show module by lazy loading concept
  {
    path: 'tv-shows',
    loadChildren: () => import('./tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  },
  //Will navigate to all-tv-shows on searching the show in search input field
  {
    path: 'all-tv-shows', component: AllTvShowsComponent,
  },
  //Will navigate to data-policies component on clicking which is present in footer
  {
    path: 'data-policies', component: DataPoliciesComponent,
  },
  //Will navigate to privacy-policy component on clicking which is present in footer
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent,
  },
  //Will navigate to tos component on clicking which is present in footer
  {
    path: 'tos', component: TosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
