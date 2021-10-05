import axios from "../API-V2/axios";
import { useState, useEffect, useCallback } from "react";
import { checkExistingState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
};

export const useContentFetchWithCredits = (
  fetchURL,
  fetchCredit,
  sessionName
) => {
  const [contentState, setContentState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch function
  const fetch = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const contentRequest = await axios.get(fetchURL);
      const creditRequest = await axios.get(fetchCredit);
      // console.log(request.data);

      const directors = creditRequest.data.crew.filter(
        (member) => member.job === "Director"
      );
      const producers = creditRequest.data.crew.filter(
        (member) => member.job === "Producer"
      );
      setContentState({
        ...contentRequest.data,
        cast: creditRequest.data.cast,
        directors,
        producers,
      });

      // set in session storage
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [fetchCredit, fetchURL]);

  // Initial Render and Fetch
  useEffect(() => {
    // // Grabbing from session storage);
    const sessionState = checkExistingState(sessionName);

    if (sessionState) {
      setContentState(sessionState);
      return;
    } else {
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
