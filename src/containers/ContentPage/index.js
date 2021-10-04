import React from "react";
import { useParams } from "react-router";
import API from "../../API-V2";
import Breadcrumb from "../../components/Breadcrumb";
import ContentInfo from "../../components/ContentInfo";
import Navbar from "../../components/Navbar";
import Spinner from "../../components/Spinner";
import { useContentFetch } from "../../hooks/useContentFetch";
import { PageContainer } from "./style";

const ContentPage = () => {
  const { contentType, contentID } = useParams();

  var fetch;
  if (contentType === "movie") {
    fetch = API.fetchMovie(contentID);
  } else if (contentType === "tv") {
    fetch = API.fetchTV(contentID);
  }

  const { contentState, loading, error } = useContentFetch(
    fetch,
    `${contentID}`
  );
  console.log(contentState);
  if (loading) return <Spinner />;

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
    </PageContainer>
  );
};

export default ContentPage;
