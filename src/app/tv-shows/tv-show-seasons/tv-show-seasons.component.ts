import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-seasons',
  templateUrl: './tv-show-seasons.component.html',
  styleUrls: ['./tv-show-seasons.component.scss']
})
export class TvShowSeasonsComponent implements OnInit {
  id: any;
  tvshowseasons: any;
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route param id in order to display the id show details
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowSeasons();
  }
  gettvShowSeasons() {
    //we will get the route param id and subscribe the tv show show api in order to display the id show details
    this.tvs.gettvShowSeasons(this.id).subscribe(
      (tvshowseasons: any) => {
        this.tvshowseasons = tvshowseasons
      },
      //Will display error message
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }

}
