import React from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../API-V2/config";
import { ContentImage } from "./styles";

const RowItems = ({ contents }) => {
  // console.log(`contents`, contents);
  return (
    <>
      {contents.map((content, index) => (
        <ContentImage
          key={index}
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${content.poster_path}`}
          alt=""
        />
      ))}
    </>
  );
};

export default RowItems;
