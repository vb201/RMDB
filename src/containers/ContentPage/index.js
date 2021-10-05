import React from "react";
import { useParams } from "react-router";
import API from "../../API-V2";
import Breadcrumb from "../../components/Breadcrumb";
import ContentInfo from "../../components/ContentInfo";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import Spinner from "../../components/Spinner";
import { useContentFetchWithCredits } from "../../hooks/useContentFetchWithCredits";
import { PageContainer } from "./style";

const ContentPage = () => {
  const { contentType, contentID } = useParams();

  var contentFetch, creditFetch, similarFetch;
  if (contentType === "movie") {
    contentFetch = API.fetchMovie(contentID);
    creditFetch = API.fetchMovieCredits(contentID);
    similarFetch = API.fetchSimilarMovie(contentID);
  } else if (contentType === "tv") {
    contentFetch = API.fetchTV(contentID);
    creditFetch = API.fetchTVCredits(contentID);
    similarFetch = API.fetchSimilarTV(contentID);
  }

  const { contentState, loading, error } = useContentFetchWithCredits(
    contentFetch,
    creditFetch,
    contentID
  );
  console.log(Object.keys(contentState).length > 3);
  if (loading) return <Spinner />;

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
