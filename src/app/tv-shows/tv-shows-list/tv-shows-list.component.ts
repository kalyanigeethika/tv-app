import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {
  tvshows: any;
  errorMsg!: string;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit() {
    //subscribe the tv show show api based on the genre filter it by genre, rating and sorted rating in order to display the tv show details
    this.tvs.gettvShows().subscribe(
      (tvshows: any) => {
        return this.tvshows = tvshows.filter(function (tvshow: any) {
          for (let tvg in tvshow.genres) {
            if ((tvshow.genres[0] == 'Drama' || tvshow.genres[0] == 'Action' || tvshow.genres[0] == 'Comedy') && (tvshow.rating.average > 8)) {
              return tvshows.sort(function (a: any, b: any) {
                return b.rating.average - a.rating.average;
              });
            }
          }
          return false;
        });

      },
      //will display error message
      (err) => {
        this.errorMsg = err;
        throw err;
      }

    );
  }
}
