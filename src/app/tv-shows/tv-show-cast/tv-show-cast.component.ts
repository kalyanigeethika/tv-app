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
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route parent param id in order to display the id cast details
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowCast();
  }
  gettvShowCast() {
    //we will get the route parent param id and subscribe the tv show cast api in order to display the id cast details
    this.tvs.gettvShowCast(this.id).subscribe(
      (tvshowcast: any) => {
        this.tvshowcast = tvshowcast
      },
      //Will display error message 
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }
}
