import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API-V2/config";
import { Content, Text, Wrapper } from "./styles";
import Thumbnail from "../Thumbnail";
const ContentInfo = ({ content }) => {
  return (
    <Wrapper backdrop={content.backdrop_path}>
      <Content>
        <Thumbnail
          image={`${IMAGE_BASE_URL}${POSTER_SIZE}${content.poster_path}`}
          clickable={false}
          onHoverOpacity
        />
        <Text>
          <h1>{content.title}</h1>
          <h3>PLOT</h3>
          <p>{content.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{content.vote_average}</div>
            </div>
            <div>
              {/* <div className="director">
                <h3>DIRECTOR{content.directors.length > 1 ? "S" : ""}</h3>
                {content.directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div> */}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};
export default ContentInfo;
