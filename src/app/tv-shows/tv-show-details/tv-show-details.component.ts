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
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route param id in order to display the id show details
    this.id = this.route.snapshot.params['id'];
    this.gettvShow();
  }
  gettvShow() {
    //we will get the route param id and subscribe the tv show show api in order to display the id show details
    this.tvs.gettvShow(this.id).subscribe(
      (tvshow: any) => {
        this.tvshow = tvshow
      },
      //Will display error message
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }
}
