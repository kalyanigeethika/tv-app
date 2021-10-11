import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-crew',
  templateUrl: './tv-show-crew.component.html',
  styleUrls: ['./tv-show-crew.component.scss']
})
export class TvShowCrewComponent implements OnInit {
  id: any;
  tvshowcrew: any;
  tvshows: any;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowCrew();
  }
  gettvShowCrew() {
    this.tvs.gettvShowCrew(this.id).subscribe(
      (tvshowcrew: any) => {
        this.tvshowcrew = tvshowcrew
      },
      err => console.log(err)
    );
  }

}
