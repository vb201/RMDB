import {
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  SEARCH_MULTI_BASE_URL,
  TRENDING_ALL_WEEK_BASE_URL,
  IN_THEATRES_BASE_URL,
  WATCH_PROVIDER_BASE_URL,
  MOVIE_FROM_WATCH_PROVIDER_BASE_URL,
  TV_FROM_WATCH_PROVIDER_BASE_URL,
  API_KEY,
} from "./config";

const API = {
  fetchMovies: (searchTerm, page) => {
    const endpoint = `${SEARCH_MOVIE_BASE_URL}${searchTerm}&page=${page}`;
    return endpoint;
  },
  fetchTVs: (searchTerm, page) => {
    const endpoint = `${SEARCH_TV_BASE_URL}${searchTerm}&page=${page}`;

    return endpoint;
  },
  fetchTrendingThisWeek: (page = 1) => {
    const endpoint = `${TRENDING_ALL_WEEK_BASE_URL}&page=${page}`;
    return endpoint;
  },
  fetchInTheatres: (page = 1, region = "IN") => {
    const endpoint = `${IN_THEATRES_BASE_URL}&page=${page}&region=${region}`;
    return endpoint;
  },
  fetchWatchProviders: (region = "IN") => {
    const endpoint = `${WATCH_PROVIDER_BASE_URL}&language=en-US&watch_region=${region}`;
    return endpoint;
  },
  fetchMovieFromWatchProvider: (id, region = "IN") => {
    const endpoint = `${MOVIE_FROM_WATCH_PROVIDER_BASE_URL}&with_watch_providers=${id}&watch_region=${region}`;
    return endpoint;
  },
  fetchTVFromWatchProvider: (id, region = "IN") => {
    const endpoint = `${TV_FROM_WATCH_PROVIDER_BASE_URL}&with_watch_providers=${id}&watch_region=${region}`;
    return endpoint;
  },
  // Fix
  fetchAll: (searchTerm, page) => {
    const endpoint = `${SEARCH_MULTI_BASE_URL}${searchTerm}&page=&${page}`;
    return endpoint;
  },
  fetchMovieVideo: (movieId) => {
    const endpoint = `movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return endpoint;
  },
  fetchTVVideo: (tvId) => {
    const endpoint = `tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`;
    return endpoint;
  },
  fetchMovie: (movieId) => {
    const endpoint = `movie/${movieId}?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchTV: (tvId) => {
    const endpoint = `tv/${tvId}?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchMovieCredits: (movieId) => {
    const endpoint = `movie/${movieId}/credits?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchTVCredits: (tvId) => {
    const endpoint = `tv/${tvId}/credits?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchSimilarMovie: (movieId) => {
    const endpoint = `movie/${movieId}/similar?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchSimilarTV: (tvId) => {
    const endpoint = `tv/${tvId}/similar?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchMovieWatchProvider: (movieId) => {
    const endpoint = `movie/${movieId}/watch/providers?api_key=${API_KEY}`;
    return endpoint;
  },
  fetchTVWatchProvider: (tvId) => {
    const endpoint = `tv/${tvId}/watch/providers?api_key=${API_KEY}`;
    return endpoint;
  },
};

export default API;
