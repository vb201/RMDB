import React from "react";
import { useContentFetch } from "../../hooks/useContentFetch";
import { Content, ContentWrapper, Title, Wrapper } from "./styles";
import RowItems from "./RowItems";
const Row = ({ title, name, fetchURL }) => {
  const { contentState, loading, error, fetch } = useContentFetch(
    fetchURL,
    name
  );
  if (loading) return <spinner />;
  return (
    <Wrapper>
      {/* Titles */}
      <Title>{title}</Title>
      <ContentWrapper>
        <Content>
          {/* {contentState.results.map((content, index) => (
            <> */}
          {/* <Title></Title> */}
          {/* <ContentImage
                key={index}
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${content.poster_path}`}
                alt=""
              /> */}
          <RowItems contents={contentState.results} />
          {/* </> */}
          {/* ))} */}
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Row;
