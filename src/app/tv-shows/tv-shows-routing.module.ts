import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowEpisodesComponent } from './tv-show-episodes/tv-show-episodes.component';
import { TvShowSeasonsComponent } from './tv-show-seasons/tv-show-seasons.component';
import { TvShowCastComponent } from './tv-show-cast/tv-show-cast.component';
import { TvShowCrewComponent } from './tv-show-crew/tv-show-crew.component';
import { TvShowGalleryComponent } from './tv-show-gallery/tv-show-gallery.component';
import { TvShowDetailsParentComponent } from './tv-show-details-parent/tv-show-details-parent.component';
const routes: Routes = [
  {
    path: '',
    component: TvShowsListComponent
  },
  {
    path: 'tv-shows-list',
    component: TvShowsListComponent
  },
  {
    path: 'tv-show-details/:id',
    component: TvShowDetailsParentComponent,
    children: [
      {
        path: '',
        component: TvShowDetailsComponent
      },
      {
        path: 'tv-show-episodes',
        component: TvShowEpisodesComponent
      },
      {
        path: 'tv-show-seasons',
        component: TvShowSeasonsComponent
      },
      {
        path: 'tv-show-cast',
        component: TvShowCastComponent
      },
      {
        path: 'tv-show-crew',
        component: TvShowCrewComponent
      },
      {
        path: 'tv-show-gallery',
        component: TvShowGalleryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule { }
