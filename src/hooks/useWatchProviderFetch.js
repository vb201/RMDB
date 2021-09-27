import axios from "../API-V2/axios";
import { useState, useEffect, useCallback } from "react";
import { checkExistingState } from "../helpers";
import API from "../API-V2";

const initialState = {
  page: 0,
  results: [],
};

export const useWatchProviderFetch = (id, WatchProviderName) => {
  const [contentState, setContentState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch function
  const fetch = useCallback(
    async (type) => {
      try {
        setError(false);
        setLoading(true);
        const movieRequest = await axios.get(
          API.fetchMovieFromWatchProvider(id)
        );
        const TVRequest = await axios.get(API.fetchTVFromWatchProvider(id));

        // console.log(`movieRequest.data`, movieRequest.data.results);
        // console.log(`TVRequest.data`, TVRequest.data.results);

        const merge = [...movieRequest.data.results, ...TVRequest.data.results];
        merge.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
        setContentState(merge);
        // console.log(`merge.data`, merge);

        // set in session storage
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    },
    [id]
  );

  // Initial Render and Fetch
  useEffect(() => {
    // // Grabbing from session storage);
    const sessionState = checkExistingState(WatchProviderName);

    if (sessionState) {
      setContentState(sessionState);
      return;
    } else {
      setContentState(initialState);
      console.log("fetching");
      fetch();
      // sessionStorage.setItem(sessionName, JSON.stringify(contentState));
    }
  }, [fetch, WatchProviderName]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(WatchProviderName, JSON.stringify(contentState));
  });

  return {
    contentState,
    loading,
    error,
    fetch,
  };
};

//
// https://api.themoviedb.org/3/discover/TV?api_key=83e2472a3e938a1fbecf4a953c538d62&with_watch_providers=8&watch_region=IN
// https://api.themoviedb.org/3/discover/tv?api_key=83e2472a3e938a1fbecf4a953c538d62&with_watch_providers=8&watch_region=IN&sort_by=popularity.desc
