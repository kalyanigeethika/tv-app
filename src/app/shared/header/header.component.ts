import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm!: any;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(Router) private router: Router, @Inject(TvShowsService) private tvs: TvShowsService) { }

  ngOnInit() {

  }
  onSubmit(searchForm: NgForm) {
    //after entering the value in search input field on form submitting it will redirecting to the all tv shows component with query params search input value
    this.router.navigate(["../../all-tv-shows"], { queryParams: { search: this.searchTerm } });
    //will reset the input field once it redirects to the tv shows component
    searchForm.reset();
  }

}
