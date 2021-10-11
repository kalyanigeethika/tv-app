export interface TvShow {
    id: number;
    name: string;
    "genres": [
        name: string,
        name: string,
        name: string
    ],
    "rating": {
        "average": number
    },
    "image": {
        "medium": string,
        "original": string
    },
}

export interface TvShows {
    tvshows: Array<TvShows>;
}