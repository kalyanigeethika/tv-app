import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';
@Component({
  selector: 'app-tv-show-episodes',
  templateUrl: './tv-show-episodes.component.html',
  styleUrls: ['./tv-show-episodes.component.scss']
})
export class TvShowEpisodesComponent implements OnInit {
  id: any;
  tvshoweps: any;
  tvshows: any;
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route parent param id in order to display the id episodes details
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowEp();
  }
  gettvShowEp() {
    //we will get the route parent param id and subscribe the tv show episodes api in order to display the id episodes details
    this.tvs.gettvShowEp(this.id).subscribe(
      (tvshoweps: any) => {
        this.tvshoweps = tvshoweps
      },
      //Will display error message 
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }

}
