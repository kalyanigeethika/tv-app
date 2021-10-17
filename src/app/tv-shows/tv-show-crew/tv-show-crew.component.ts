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
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route parent param id in order to display the id cast details
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowCrew();
  }
  gettvShowCrew() {
    //we will get the route parent param id and subscribe the tv show crew api in order to display the id cast details
    this.tvs.gettvShowCrew(this.id).subscribe(
      (tvshowcrew: any) => {
        this.tvshowcrew = tvshowcrew
      },
      //Will display error message 
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }

}
