import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchTerm: any;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.router.navigate(["../../all-tv-shows"], { queryParams: { search: this.searchTerm } });
  }

}
