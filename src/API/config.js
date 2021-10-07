// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

// test
// https://api.themoviedb.org/3/movie/popular?api_key=83e2472a3e938a1fbecf4a953c538d62&language=en-US&page=
// https://api.themoviedb.org/3/movie/now_playing?api_key=&83e2472a3e938a1fbecf4a953c538d62&page=1&region=US

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// For search
const SEARCH_MOVIE_BASE_URL = `search/movie?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_TV_BASE_URL = `search/tv?api_key=${API_KEY}&language=en-US&query=`;
const SEARCH_MULTI_BASE_URL = `search/multi?api_key=${API_KEY}&query=`;

// // For popular
// const POPULAR_MOVIE_BASE_URL = `movie/popular?api_key=${API_KEY}&language=en-US`;
// const POPULAR_TV_BASE_URL = `tv/popular?api_key=${API_KEY}&language=en-US`;

// For Trending
const TRENDING_ALL_WEEK_BASE_URL = `trending/all/week?api_key=${API_KEY}`;

// For In Theatres
const IN_THEATRES_BASE_URL = `movie/now_playing?api_key=${API_KEY}`;

// Watch Providers
const WATCH_PROVIDER_BASE_URL = `watch/providers/movie?api_key=${API_KEY}`;
const MOVIE_FROM_WATCH_PROVIDER_BASE_URL = `discover/movie?api_key=${API_KEY}`;
const TV_FROM_WATCH_PROVIDER_BASE_URL = `discover/tv?api_key=${API_KEY}`;

// For login and voting
const REQUEST_TOKEN_URL = `authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "original";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w342";
const BIG_POSTER_SIZE = "w500";

// http://image.tmdb.org/t/p/w1280//gFZriCkpJYsApPZEF3jhxL4yLzG.jpg
// url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})

export {
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  SEARCH_MULTI_BASE_URL,
  TRENDING_ALL_WEEK_BASE_URL,
  IN_THEATRES_BASE_URL,
  WATCH_PROVIDER_BASE_URL,
  MOVIE_FROM_WATCH_PROVIDER_BASE_URL,
  TV_FROM_WATCH_PROVIDER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  BIG_POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
