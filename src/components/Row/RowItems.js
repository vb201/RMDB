import React from "react";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../API-V2/config";
import Thumbnail from "../Thumbnail";
import { ContentItem } from "./styles";

const RowItems = ({ contents }) => {
  // console.log(`contents`, contents);
  return (
    <>
      {contents.map((content, index) => (
        <ContentItem key={index}>
          <Thumbnail
            clickable
            small
            image={`${IMAGE_BASE_URL}${POSTER_SIZE}${content.poster_path}`}
            linkTo={
              content?.title || content?.orignal_title
                ? `/movie/${content.id}`
                : `/tv/${content.id}`
            }
          />
        </ContentItem>
      ))}
    </>
  );
};

export default RowItems;
