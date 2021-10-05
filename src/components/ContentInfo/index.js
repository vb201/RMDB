import React from "react";

import { IMAGE_BASE_URL, BIG_POSTER_SIZE } from "../../API-V2/config";
import { Content, Text, Wrapper } from "./styles";
import Thumbnail from "../Thumbnail";
import Grid from "../Grid";
const ContentInfo = ({ content }) => {
  const totalDirector = content.directors.length;
  const totalProducer = content.producers.length;

  return (
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
          <div className="py-3">{content.overview}</div>

          <div className="">
            {/* <div>
              <div className="py-3 text-xl font-semibold">RATING</div>
              <div className="flex items-center justify-center font-extrabold text-black bg-white w-9 h-9 rounded-3xl">
                {content.vote_average}
              </div>
            </div>
            <div className="ml-10">
              <div className="py-3 text-xl font-semibold">
                DIRECTOR
                {totalDirector > 1 ? "S" : ""}
              </div>
              <div className="flex px-1">
                {content.directors.map((director, index) => (
                  <div key={director.credit_id} className="px-1 py-1">
                    {director.name}
                    {totalDirector > index + 1 ? "," : ""}
                  </div>
                ))}
              </div>
            </div> */}
            <Grid>
              <div>
                <div className="py-3 text-xl font-semibold">RATING</div>

                <div className="flex items-center justify-center font-extrabold text-black bg-white w-9 h-9 rounded-3xl">
                  {content.vote_average}
                </div>
              </div>
              {totalDirector > 0 && (
                <div>
                  <div className="py-3 text-xl font-semibold">
                    DIRECTOR
                    {totalDirector > 1 ? "S" : ""}
                  </div>
                  {content.directors.map((director, index) => (
                    <div
                      key={director.credit_id}
                      className="inline-flex px-1 py-1"
                    >
                      {director.name}
                      {totalDirector > index + 1 ? "," : ""}
                    </div>
                  ))}
                </div>
              )}
              {totalProducer > 0 && (
                <div>
                  <div className="py-3 text-xl font-semibold">
                    PRODUCER
                    {totalProducer > 1 ? "S" : ""}
                  </div>
                  {content.producers.map((producer, index) => (
                    <div
                      key={producer.credit_id}
                      className="inline-flex px-1 py-1"
                    >
                      {producer.name}
                      {totalProducer > index + 1 ? "," : ""}
                    </div>
                  ))}
                </div>
              )}
            </Grid>
            {/* <Grid header="RATING"> </Grid> */}
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};
export default ContentInfo;
