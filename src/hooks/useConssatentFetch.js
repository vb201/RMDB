import { useState, useEffect } from "react";

// Helpers
import { checkExistingState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

// const initialState = {
// 	page: 0,
// 	results: [] as Movie[],
// 	total_pages: 0,
// 	total_results: 0,
// };
export const useContentFetch = (fetchURL, Name) => {
  const [contentState, setContentState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Initial Render and Search
  useEffect(() => {
    // Check sessionStorage
    const fetch = async () => {
      try {
        setError(false);
        setLoading(true);

        const content = await fetchURL;

        setContentState((prev) => ({
          ...content,
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    // Grabbing from session storage);
    const sessionState = checkExistingState(Name);

    if (sessionState) {
      setContentState(sessionState);
      return;
    }

    // Set initial state and then fetch from API
    setContentState(initialState);
    fetch();
  }, [Name, fetchURL]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(Name, JSON.stringify(contentState));
  });

  return {
    contentState,
    loading,
    error,
  };
};
