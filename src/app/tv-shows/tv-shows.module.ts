import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowEpisodesComponent } from './tv-show-episodes/tv-show-episodes.component';
import { TvShowSeasonsComponent } from './tv-show-seasons/tv-show-seasons.component';
import { TvShowCastComponent } from './tv-show-cast/tv-show-cast.component';
import { TvShowCrewComponent } from './tv-show-crew/tv-show-crew.component';
import { TvShowGalleryComponent } from './tv-show-gallery/tv-show-gallery.component';
import { TvShowDetailsParentComponent } from './tv-show-details-parent/tv-show-details-parent.component';


@NgModule({
  declarations: [TvShowsListComponent, TvShowDetailsComponent, TvShowEpisodesComponent, TvShowSeasonsComponent, TvShowCastComponent, TvShowCrewComponent, TvShowGalleryComponent, TvShowDetailsParentComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule
  ]
})
export class TvShowsModule { }
