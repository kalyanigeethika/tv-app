import { Component, OnInit, Inject } from '@angular/core';
import { TvShowsService } from './../services/tv-shows.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  tvshows: any;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //Got input value from search box and based on the input value will call search api and subscribe it and display the search results in the tv shows componen
    this.tvs.searchob.subscribe(v => {
      this.tvs.gettvShowSearch(v).subscribe(
        (tvshows: any) => {
          this.tvshows = tvshows.map((v: any) => v.show)
        },
        err => console.log(err)
      );
    });
  }

}
