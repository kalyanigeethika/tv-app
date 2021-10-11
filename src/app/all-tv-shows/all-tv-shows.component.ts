import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { TvShowsService } from './../services/tv-shows.service';

@Component({
  selector: 'app-all-tv-shows',
  templateUrl: './all-tv-shows.component.html',
  styleUrls: ['./all-tv-shows.component.scss']
})
export class AllTvShowsComponent implements OnInit {
  tvshows: any;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let searchparam = params['search'];
      if (!searchparam) {
        this.gettvShows();
        return;
      }
      this.tvs.gettvShowSearch(searchparam).subscribe(
        (tvshows: any) => {
          this.tvshows = tvshows.map((v: any) => v.show)
        },
        err => console.log(err)
      );
    });
  }
  gettvShows() {
    this.tvs.gettvShows().subscribe(
      (tvshows: any) => {
        this.tvshows = tvshows;
      },
      err => console.log(err)
    );
  }

}
