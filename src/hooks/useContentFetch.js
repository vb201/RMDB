import axios from "../API-V2/axios";
import { useState, useEffect, useCallback } from "react";
import { checkExistingState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
};

export const useContentFetch = (fetchURL, sessionName) => {
  const [contentState, setContentState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch function
  const fetch = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const request = await axios.get(fetchURL);
      // console.log(request.data);
      setContentState(request.data);

      // set in session storage
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [fetchURL]);

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
  }, [fetch, fetchURL, sessionName]);

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
