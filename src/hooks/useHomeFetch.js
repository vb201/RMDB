import axios from "../API/axios";
import { useState, useEffect } from "react";

// Api
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [LoadingMore, setLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm) => {
    try {
      setError(false);
      // setLoading(true);

      const movieRequest = await axios.get(API.fetchMovies(searchTerm, page));
      const tvRequest = await axios.get(API.fetchTVs(searchTerm, page));

      const contentResult = [
        ...movieRequest.data.results,
        ...tvRequest.data.results,
      ];
      contentResult.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
      setState((prev) => ({
        ...movieRequest.data,
        results:
          page > 1 ? [...prev.results, ...contentResult] : [...contentResult],
      }));
    } catch (error) {
      setError(true);
    }
    // setLoading(false);
  };

  // // Search
  // useEffect(() => {
  //   if (searchTerm) {
  //     // Set initial state and then fetch from API
  //     setState(initialState);
  //     fetchMovies(1, searchTerm);
  //   }
  // }, [searchTerm]);
  // Initial Render and Search

  useEffect(() => {
    // Check sessionStorage
    if (searchTerm === "") return;
    // Set initial state and then fetch from API
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!LoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [LoadingMore, searchTerm, state.page]);

  return {
    state,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  };
};
