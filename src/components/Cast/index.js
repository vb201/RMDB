import React from "react";

import {
  ContentWrapper,
  Title,
  Wrapper,
  ContentItem,
  CastWrapper,
  Image,
} from "./styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";
import NoImage from "../../assets/images/NoImage.png";
const CastRow = ({ casts }) => {
  return (
    <Wrapper>
      {/* Titles */}
      <Title>Cast</Title>
      <ContentWrapper>
        {casts.map((cast, index) => (
          <ContentItem key={cast.credit_id}>
            <CastWrapper>
              <Image
                src={
                  cast.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`
                    : NoImage
                }
                alt="actor-thumbnail"
              />
              <div className="pt-5 text-xl font-semibold">{cast.name}</div>
              <div className="pb-2 m-auto">{cast.character}</div>
            </CastWrapper>
          </ContentItem>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CastRow;
