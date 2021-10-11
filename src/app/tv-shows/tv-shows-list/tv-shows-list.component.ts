import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {
  tvshows: any;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit() {
    this.tvs.gettvShows().subscribe(
      (tvshows: any) => {
        this.tvshows = tvshows.filter(function (tvshow: any) {
          for (let tvg in tvshow.genres) {
            if ((tvshow.genres[0] == 'Drama' || tvshow.genres[0] == 'Action' || tvshow.genres[0] == 'Comedy') && (tvshow.rating.average > 8)) {
              return true;
            }
          }
          return false;
        });

      },
      err => console.log(err)
    );
  }
}
