import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-gallery',
  templateUrl: './tv-show-gallery.component.html',
  styleUrls: ['./tv-show-gallery.component.scss']
})
export class TvShowGalleryComponent implements OnInit {
  id: any;
  tvshowgallery: any;
  tvshows: any;
  errorMsg!: string;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    //we will get the route parent param id in order to display the id gallery details
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowGallery();
  }
  gettvShowGallery() {
    //we will get the route parent param id and subscribe the tv show images api in order to display the id cast details
    this.tvs.gettvShowGallery(this.id).subscribe(
      (tvshowgallery: any) => {
        this.tvshowgallery = tvshowgallery
      },
      //Will display error message
      (err) => {
        this.errorMsg = err;
        throw err;
      }
    );
  }

}
