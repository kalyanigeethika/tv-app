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
  APIUrl: any = environment.APIUrl;
  private results = new BehaviorSubject([]);
  public searchob = this.results.asObservable();
  constructor(private http: HttpClient) { }
  public getResults$() {
    return this.results.asObservable();
  }
  emitsearchResult(postData: any) {
    this.results.next(postData);
  }
  gettvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows?genres`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshows data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShow(id: number): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowSearch(show: any): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/search/shows?q=${show}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow search data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowEp(id: number): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/episodes`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow episodes data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowSeasons(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/seasons`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow seasons data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowCrew(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/crew`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow crew data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowCast(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/cast`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow cast data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowGallery(id: number): Observable<any> {
    return this.http.get<TvShow[]>(`${this.APIUrl}/shows/${id}/images`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving tvshow gallery data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
  gettvShowPeople() {
    return this.http.get<TvShow[]>(`${this.APIUrl}/people`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving peoples data. ${error.statusText || "Something Went Wrong"} `
        );
      })
    );
  }
}

