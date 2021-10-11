import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTvShowsComponent } from './all-tv-shows/all-tv-shows.component';
import { PeopleComponent } from './people/people.component';
import { DataPoliciesComponent } from './data-policies/data-policies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  },
  {
    path: 'tv-shows',
    loadChildren: () => import('./tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  },
  {
    path: 'all-tv-shows', component: AllTvShowsComponent,
  },
  {
    path: 'people', component: PeopleComponent,
  },
  {
    path: 'data-policies', component: DataPoliciesComponent,
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent,
  },
  {
    path: 'tos', component: TosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
