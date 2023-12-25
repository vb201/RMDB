import React from "react";
import { useParams } from "react-router";
import API from "../../API";
import Breadcrumb from "../../components/Breadcrumb";
import Cast from "../../components/Cast";
import ContentInfo from "../../components/ContentInfo";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import { useContentFetchWithCredits } from "../../hooks/useContentFetchWithCredits";
import ErrorPage from "../ErrorPage";
import { PageContainer } from "./style";
import FullPageLoader from "../../components/FullPageLoader";

const ContentPage = () => {
  const { contentType, contentID } = useParams();

  var contentFetch, creditFetch, similarFetch, trailerFetch;
  if (contentType === "movie") {
    contentFetch = API.fetchMovie(contentID);
    creditFetch = API.fetchMovieCredits(contentID);
    similarFetch = API.fetchSimilarMovie(contentID);
    trailerFetch = API.fetchMovieVideo(contentID);
  } else if (contentType === "tv") {
    contentFetch = API.fetchTV(contentID);
    creditFetch = API.fetchTVCredits(contentID);
    similarFetch = API.fetchSimilarTV(contentID);
    trailerFetch = API.fetchTVVideo(contentID);
  }

  const { contentState, loading, error } = useContentFetchWithCredits(
    contentFetch,
    creditFetch,
    trailerFetch,
    contentID
  );

  if (error) return <ErrorPage />;
  if (loading) return <FullPageLoader isLoading={loading} />;
  
  if (Object.keys(contentState).length > 3)
    return (
      <PageContainer>
        <Navbar />
        {/* <div>asdasdasd</div>
         */}
        <Breadcrumb
          contentTitle={
            contentState?.title ||
            contentState?.name ||
            contentState?.orignal_title ||
            contentState?.original_name
          }
          content={contentState}
        />
        <ContentInfo content={contentState} />
        <Cast casts={contentState.cast} />
        <Row
          title={`Similar ${contentType}`}
          name={`similarWith${contentID}`}
          fetchURL={similarFetch}
        />
      </PageContainer>
    );
  return <></>;
};

export default ContentPage;
