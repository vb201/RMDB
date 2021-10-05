import React from "react";
import API from "../../API-V2";
import ErrorPage from "../../containers/ErrorPage";
import { useMergeContentFetch } from "../../hooks/useMergeContentFetch";
import RowItems from "../Row/RowItems";
import Spinner from "../Spinner";
import { Content } from "./styles";

const WatchProviderRow = ({ id, watchProviderName }) => {
  const { contentState, loading, error } = useMergeContentFetch(
    API.fetchMovieFromWatchProvider(id),
    API.fetchTVFromWatchProvider(id),
    watchProviderName
  );
  // console.log(contentState);

  if (error) return <ErrorPage />;
  if (loading) return <Spinner />;
  return (
    // <div>
    <>
      {Object.keys(contentState).length > 2 && (
        <Content>
          <RowItems contents={contentState} />
        </Content>
      )}
    </>
    // </div>
  );
};

export default WatchProviderRow;
