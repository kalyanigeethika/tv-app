import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-cast',
  templateUrl: './tv-show-cast.component.html',
  styleUrls: ['./tv-show-cast.component.scss']
})
export class TvShowCastComponent implements OnInit {
  id: any;
  tvshowcast: any;
  tvshows: any;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowCast();
  }
  gettvShowCast() {
    this.tvs.gettvShowCast(this.id).subscribe(
      (tvshowcast: any) => {
        this.tvshowcast = tvshowcast
      },
      err => console.log(err)
    );
  }
}
