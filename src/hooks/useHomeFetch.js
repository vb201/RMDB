import { useState, useEffect } from "react";

// Api
import API, { Banner } from "../API/API";

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
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bannerState, setBannerState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [LoadingMore, setLoadingMore] = useState(false);

  const fetch = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      // console.log(await API.fetchMovies(searchTerm, page));

      const banner = await API.fetchTrendingThisWeek(page);

      // const check = await API.fetchTVs(searchTerm, page);
      // setTempstate(check);
      setBannerState((prev) => ({
        ...banner,
        results:
          page > 1 ? [...prev.results, ...banner.results] : [...banner.results],
      }));
      console.log(banner);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial Render and Search
  useEffect(() => {
    // Check sessionStorage
    if (!searchTerm) {
      // console.log("Grabbing from session storage");
      const sessionState = checkExistingState("homeBannerState");

      if (sessionState) {
        setBannerState(sessionState);
        return;
      }
    }
    // Set initial state and then fetch from API
    setBannerState(initialState);
    fetch(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!LoadingMore) return;

    fetch(bannerState.page + 1, searchTerm);
    setLoadingMore(false);
  }, [LoadingMore, searchTerm, bannerState.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeBannerState", JSON.stringify(bannerState));
    }
  });

  return {
    bannerState,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  };
};
