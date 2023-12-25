import React from "react";
import API from "../../API";
import ErrorPage from "../../containers/ErrorPage";
import { useMergeContentFetch } from "../../hooks/useMergeContentFetch";
import RowItems from "../Row/RowItems";
import Spinner from "../Spinner";
import { Content, ContentWrapper } from "./styles";

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
    <ContentWrapper>
      {loading && <Spinner />}

      {Object.keys(contentState).length > 2 && (
        <Content>
          <RowItems contents={contentState} />
        </Content>
      )}
    </ContentWrapper>
    // </div>
  );
};

export default WatchProviderRow;
