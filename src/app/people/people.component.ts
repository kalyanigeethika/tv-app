import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../services/tv-shows.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  tvshowpeople: any;
  tvshows: any;
  constructor(@Inject(TvShowsService) private tvs: TvShowsService, @Inject(Router) private router: Router, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit() {
    this.gettvShowPeople();
  }
  gettvShowPeople() {
    this.tvs.gettvShowPeople().subscribe(
      (tvshowpeople: any) => {
        this.tvshowpeople = tvshowpeople;

      },
      err => console.log(err)
    );
  }

}
