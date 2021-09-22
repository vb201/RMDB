// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

// test
// https://api.themoviedb.org/3/movie/popular?api_key=83e2472a3e938a1fbecf4a953c538d62&language=en-US&page=
// https://api.themoviedb.org/3/trending/all/day?api_key=83e2472a3e938a1fbecf4a953c538d62

const API_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string | undefined = process.env.REACT_APP_TMDB_API_KEY;

// For search
const SEARCH_MOVIE_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_TV_BASE_URL: string = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_MULTI_BASE_URL: string = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=`;

// For popular
const POPULAR_MOVIE_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const POPULAR_TV_BASE_URL: string = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;

// For Trending

const TRENDING_ALL_WEEK_BASE_URL: string = `${API_URL}trending/all/week?api_key=${API_KEY}`;

// For login and voting
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = "w780";

export {
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  SEARCH_MULTI_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  POPULAR_TV_BASE_URL,
  TRENDING_ALL_WEEK_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
