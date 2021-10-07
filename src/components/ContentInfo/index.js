import React, { useState } from "react";

import { IMAGE_BASE_URL, BIG_POSTER_SIZE } from "../../API/config";
import { Content, Text, Wrapper } from "./styles";
import Thumbnail from "../Thumbnail";
import Grid from "../Grid";
import { useParams } from "react-router";
import API from "../../API";
import Spinner from "../Spinner";
import ErrorPage from "../../containers/ErrorPage";
import PrimaryButton from "../Buttons/Primary";
import Modal from "../Modal";

import { useContentFetch } from "../../hooks/useContentFetch";
const ContentInfo = ({ content, region = "IN" }) => {
  const { contentType, contentID } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  let contentWatchProviderFetch;
  if (contentType === "movie") {
    contentWatchProviderFetch = API.fetchMovieWatchProvider(contentID);
  } else if (contentType === "tv") {
    contentWatchProviderFetch = API.fetchTVWatchProvider(contentID);
  }
  const { contentState, loading, error } = useContentFetch(
    contentWatchProviderFetch,
    `${contentID}WatchProviders`
  );

  const totalDirector = content.directors.length;
  const totalProducer = content.producers.length;

  if (loading) return <Spinner />;
  if (error) return <ErrorPage />;

  return (
    <>
      <Wrapper backdrop={content.backdrop_path}>
        <Content>
          <Thumbnail
            image={`${IMAGE_BASE_URL}${BIG_POSTER_SIZE}${content.poster_path}`}
            clickable={false}
            onHoverOpacity
          />
          <Text>
            <div className="pb-5 text-4xl font-semibold">{content.title}</div>
            <div className="py-3 text-xl font-semibold">PLOT </div>
            <div className="py-3 mr-5">{content.overview}</div>
            <PrimaryButton
              title="Watch Trailer"
              callback={() => setIsOpen(true)}
            />
            <Grid>
              {/* Rating Column */}
              <RatingColumn vote_average={content.vote_average} />

              {/* Director Column */}
              {totalDirector > 0 && (
                <DirectorColumn
                  totalDirector={totalDirector}
                  content={content}
                />
              )}

              {/* Producer Column */}
              {totalProducer > 0 && (
                <ProducerColumn
                  totalProducer={totalProducer}
                  content={content}
                />
              )}

              {/* WatchProvider Column */}
              {contentState.results[region] !== undefined &&
                Object.keys(contentState.results[region]).length > 0 &&
                contentState.results[region].flatrate !== undefined && (
                  <WatchProviderColumn content={contentState} region={region} />
                )}
            </Grid>
          </Text>
        </Content>
      </Wrapper>
      <Modal open={isOpen} setIsOpen={setIsOpen}>
        {/* <YouTube videoId={content.trailer[0].key} opts={opts} /> */}
        {Object.keys(content.trailer).length > 0 ? (
          <iframe
            title={content.id}
            src={`https://www.youtube-nocookie.com/embed/${content.trailer[0].key}?vq=hd1080&autoplay=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&color=white`}
            width="1280"
            height="720"
          />
        ) : (
          <div>Trailer Not Found</div>
        )}
      </Modal>
    </>
  );
};
const DirectorColumn = ({ totalDirector, content }) => {
  return (
    <div>
      <div className="py-3 text-xl font-semibold">
        DIRECTOR
        {totalDirector > 1 ? "S" : ""}
      </div>
      {content.directors.map((director, index) => (
        <div key={director.credit_id} className="inline-flex px-1 py-1">
          {director.name}
          {totalDirector > index + 1 ? "," : ""}
        </div>
      ))}
    </div>
  );
};

const ProducerColumn = ({ totalProducer, content }) => {
  return (
    <div>
      <div className="py-3 text-xl font-semibold">
        PRODUCER
        {totalProducer > 1 ? "S" : ""}
      </div>
      {content.producers.map((producer, index) => (
        <div key={producer.credit_id} className="inline-flex px-1 py-1">
          {producer.name}
          {totalProducer > index + 1 ? "," : ""}
        </div>
      ))}
    </div>
  );
};

const WatchProviderColumn = ({ content, region }) => {
  return (
    <div>
      <div className="py-3 text-xl font-semibold">WATCH AT</div>
      {content.results[region].flatrate.map((watch, index) => (
        <div key={watch.provider_id} className="inline-flex px-1 py-1">
          <img
            className="m-auto"
            src={`${IMAGE_BASE_URL}original${watch.logo_path}`}
            width="50"
            alt={watch.provider_name}
          />
        </div>
      ))}
    </div>
  );
};

const RatingColumn = ({ vote_average }) => {
  return (
    <div>
      <div className="py-3 text-xl font-semibold">RATING</div>

      <div className="flex items-center justify-center font-extrabold text-black bg-white w-9 h-9 rounded-3xl">
        {vote_average}
      </div>
    </div>
  );
};
export default ContentInfo;
