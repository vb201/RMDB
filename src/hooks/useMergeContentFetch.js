import axios from "../API-V2/axios";
import { useState, useEffect, useCallback } from "react";
import { checkExistingState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
};

export const useMergeContentFetch = (fetchMovie, fetchTV, sessionName) => {
  const [contentState, setContentState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch function
  const fetch = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const movieRequest = await axios.get(fetchMovie);
      const TVRequest = await axios.get(fetchTV);

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
  }, [fetchMovie, fetchTV]);

  // Initial Render and Fetch
  useEffect(() => {
    // // Grabbing from session storage);
    const sessionState = checkExistingState(sessionName);

    if (sessionState) {
      setContentState(sessionState);
      return;
    } else {
      setContentState(initialState);
      console.log("fetching");
      fetch();
      // sessionStorage.setItem(sessionName, JSON.stringify(contentState));
    }
  }, [fetch, sessionName]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(sessionName, JSON.stringify(contentState));
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
