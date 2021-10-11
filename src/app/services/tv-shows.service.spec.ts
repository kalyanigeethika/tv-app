import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  let tvs: TvShowsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService]
    });
    tvs = TestBed.inject(TvShowsService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('gettvShows() should http GET shows', () => {

    const tvshow = [{
      id: 1,
      "name": "Under the Dome",
      "genres": [
        "Drama",
        "Science-Fiction",
        "Thriller"
      ],
      "rating": {
        "average": 6.5
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      }
    }];

    tvs.gettvShows().subscribe((res: any) => {
      expect(res).toEqual(tvshow);
    });

    const req = httpMock.expectOne('https://api.tvmaze.com/shows?genres');
    expect(req.request.method).toEqual("GET");
    req.flush(tvshow);
    httpMock.verify();
  });
  it("should throw error", () => {
    let error: string;
    tvs.gettvShows().subscribe(null, e => {
      error = e;
    });
    const req = httpMock.expectOne("https://api.tvmaze.com/shows?genres");
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
    httpMock.verify();
  });
  it("gettvShow() should http GET show id", () => {
    tvs.gettvShow(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id fails", () => {
    let error: string;
    tvs.gettvShow(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });

  });
  it("gettvShowEp() should http GET show id Episode", () => {
    tvs.gettvShowEp(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}/episodes`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id Episode fails", () => {
    let error: string;
    tvs.gettvShowEp(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2/episodes`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
  });
  it("gettvShowSeasons() should http GET show id seasons", () => {
    tvs.gettvShowSeasons(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}/seasons`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id Seasons fails", () => {
    let error: string;
    tvs.gettvShowSeasons(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2/seasons`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
  });

  it("gettvShowCrew() should http GET show id crew", () => {
    tvs.gettvShowCrew(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}/crew`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id crew fails", () => {
    let error: string;
    tvs.gettvShowCrew(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2/crew`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
  });


  it("gettvShowCast() should http GET show id cast", () => {
    tvs.gettvShowCast(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}/cast`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id cast fails", () => {
    let error: string;
    tvs.gettvShowCast(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2/cast`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
  });

  it("gettvShowGallery() should http GET show id cast", () => {
    tvs.gettvShowGallery(1).subscribe();
    let id = 1;
    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/${id}/images`
    });

    expect(req).toBeDefined();
  });

  it("should throw error when http GET show id cast fails", () => {
    let error: string;
    tvs.gettvShowGallery(2).subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne({
      method: "GET",
      url: `https://api.tvmaze.com/shows/2/images`
    });
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
  });
});
