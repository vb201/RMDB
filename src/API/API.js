import {
  SEARCH_MOVIE_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  POPULAR_TV_BASE_URL,
  SEARCH_MULTI_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  TRENDING_ALL_WEEK_BASE_URL,
} from "./config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// // Types

// export type Movie = {
//   backdrop_path: string,
//   // genre_ids: number[];
//   id: number,
//   original_title: string,
//   overview: string,
//   popularity: number,
//   poster_path: string,
//   title: string,
//   vote_average: number,
//   vote_count: number,
//   runtime: number,
//   budget: number,
//   revenue: number,
// };

// export type Banners = {
//   page: number,
//   results: Banner[],
//   total_pages: number,
//   total_results: number,
// };

// export type Banner = {
//   backdrop_path: string,
//   id: number,
//   overview: string,
//   popularity: number,
//   poster_path: string,
// };
// export type TV = {
//   backdrop_path: string,
//   // genre_ids: number[];
//   id: number,
//   original_name: string,
//   overview: string,
//   popularity: number,
//   poster_path: string,
//   vote_average: number,
//   vote_count: number,
// };

// export type Movies = {
//   page: number,
//   results: Movie[],
//   total_pages: number,
//   total_results: number,
// };

// export type TVs = {
//   page: number,
//   results: TV[],
//   total_pages: number,
//   total_results: number,
// };

// export type Cast = {
//   character: string,
//   credit_id: string,
//   name: string,
//   profile_path: string,
// };

// export type Crew = {
//   job: string,
//   name: string,
//   credit_id: number,
// };
// export type Credits = {
//   id: number,
//   cast: Cast[],
//   crew: Crew[],
// };
// // export type MovieVideo ={

// // }
// export type MovieVideo = {
//   id: number,
//   results: [
//     {
//       name: string,
//       key: string,
//       site: string,
//       // maybe
//       // size:string;
//       type: string,
//       official: boolean,
//     }
//   ],
// };

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_MOVIE_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_MOVIE_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTVs: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_TV_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_TV_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingThisWeek: async (page) => {
    const endpoint = `${TRENDING_ALL_WEEK_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  // Fix
  fetchAll: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_MULTI_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_TV_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovieVideo: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  // Not fixed
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
