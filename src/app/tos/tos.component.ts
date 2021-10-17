import { Component, OnInit, Inject } from '@angular/core';
import { TvShowsService } from './../services/tv-shows.service';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.scss']
})
export class TosComponent implements OnInit {
  tvshows: any;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //Got input value from search box and based on the input value will call search api and subscribe it and display the search results in the tv shows component.
    this.tvs.searchob.subscribe(v => {
      this.tvs.gettvShowSearch(v).subscribe(
        (tvshows: any) => {
          this.tvshows = tvshows.map((v: any) => v.show)
        },
        //will display error message
        err => console.log(err)
      );
    });
  }

}
