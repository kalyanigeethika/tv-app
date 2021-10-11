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
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {
    this.id = this.route.parent?.snapshot.paramMap.get("id");
    this.gettvShowGallery();
  }
  gettvShowGallery() {
    this.tvs.gettvShowGallery(this.id).subscribe(
      (tvshowgallery: any) => {
        this.tvshowgallery = tvshowgallery
      },
      err => console.log(err)
    );
  }

}
