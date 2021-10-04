import React from "react";
import { Link } from "react-router-dom";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../API-V2/config";
import Thumbnail from "../Thumbnail";
import { ContentImage, ContentItem } from "./styles";

const RowItems = ({ contents }) => {
  // console.log(`contents`, contents);
  return (
    <>
      {contents.map((content, index) => (
        <ContentItem>
          <Link
            to={
              content?.title || content?.orignal_title
                ? `/movie/${content.id}`
                : `/tv/${content.id}`
            }
          >
            {/* <ContentImage
              key={index}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${content.poster_path}`}
              alt="Thumbnail"
            /> */}
            <Thumbnail
              key={index}
              clickable
              small
              image={`${IMAGE_BASE_URL}${POSTER_SIZE}${content.poster_path}`}
              linkTo={
                content?.title || content?.orignal_title
                  ? `/movie/${content.id}`
                  : `/tv/${content.id}`
              }
            />
          </Link>
        </ContentItem>
      ))}
    </>
  );
};

export default RowItems;
