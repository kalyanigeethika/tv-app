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
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowSeasons();
  }
  gettvShowSeasons() {
    this.tvs.gettvShowSeasons(this.id).subscribe(
      (tvshowseasons: any) => {
        this.tvshowseasons = tvshowseasons
      },
      err => console.log(err)
    );
  }

}
