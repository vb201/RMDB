import React from "react";
import { useContentFetch } from "../../hooks/useContentFetch";
import { ContentWrapper, Title, Wrapper } from "./styles";
import RowItems from "./RowItems";
import ErrorPage from "../../containers/ErrorPage";
import Spinner from "../Spinner";
const Row = ({ title, name, fetchURL }) => {
  const { contentState, loading, error } = useContentFetch(fetchURL, name);
  if (error) return <ErrorPage />;
  if (loading) return <spinner />;
  return (
    <Wrapper>
      {/* Titles */}
      <Title>{title}</Title>
      <ContentWrapper>
        {loading && <Spinner />}
        <RowItems contents={contentState.results} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Row;
