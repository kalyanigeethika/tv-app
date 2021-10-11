import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {
  id!: number;
  tvshow: any;
  tvshows: any;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.gettvShow();
  }
  gettvShow() {
    this.tvs.gettvShow(this.id).subscribe(
      (tvshow: any) => {
        this.tvshow = tvshow
      },
      err => console.log(err)
    );
  }
}
