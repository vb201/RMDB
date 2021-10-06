import React from "react";
import Cast from ".";
import { ContentWrapper, Title, Wrapper, ContentItem } from "./styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API-V2/config";
import NoImage from "../../assets/images/NoImage.png";
const CastRow = ({ casts }) => {
  return (
    <Wrapper>
      {/* Titles */}
      <Title>Cast</Title>
      <ContentWrapper>
        {casts.map((cast, index) => (
          <ContentItem key={index}>
            <Cast
              key={cast.credit_id}
              name={cast.name}
              character={cast.character}
              imageUrl={
                cast.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`
                  : NoImage
              }
            />
          </ContentItem>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CastRow;
