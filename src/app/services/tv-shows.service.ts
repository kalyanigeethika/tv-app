import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { TvShow } from '../models/tvshows';
@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  //Common URL which is present in environment.ts 
  APIUrl: any = environment.APIUrl;
  //Behavior Subject is used to set the initial value 
  private results = new BehaviorSubject([]);
  //to get the results as observable
  public searchob = this.results.asObservable();
  constructor(private http: HttpClient) { }
  public getResults$() {
    return this.results.asObservable();
  }
  //emit search result is used to call the next api call from different components
  emitsearchResult(postData: any) {
    this.results.next(postData);
  }
  //get shows method to display the default home page 
  gettvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows?genres`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshows data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show method to display the show page with specific id
  gettvShow(id: number): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show method to display the show page with specific show in getting search field
  gettvShowSearch(show: any): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/search/shows?q=${show}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow search data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show episodes method to display the show page with specific id episodes
  gettvShowEp(id: number): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/episodes`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow episodes data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show seasons method to display the show page with specific id seasons
  gettvShowSeasons(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/seasons`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow seasons data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show crew method to display the show page with specific id crew
  gettvShowCrew(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/crew`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow crew data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show cast method to display the show page with specific id cast
  gettvShowCast(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/cast`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow cast data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  //get show gallery method to display the show page with specific id gallery
  gettvShowGallery(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/images`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow gallery data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
}

