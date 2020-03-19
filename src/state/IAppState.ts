export interface IMovie {

    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: String;
    id: number;
    adult: boolean;
    backdrop_path: String;
    original_language: String;
    original_title: String;
    genre_ids: number[];
    length: 5;
    title: String;
    vote_average: number;
    overview: String;
    release_date: String;
}

export interface IAppState {

    data: IMovie[]
}
