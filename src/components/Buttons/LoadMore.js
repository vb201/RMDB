import React from "react";
import { LoadMoreButtonWrapper } from "./styles";

const LoadMoreButton = ({ title, callback }) => {
  return (
    <LoadMoreButtonWrapper type="button" onClick={callback} className="m-auto">
      <div className="flex justify-center text-2xl font-bold text-center">
        {title}
      </div>
    </LoadMoreButtonWrapper>
  );
};

export default LoadMoreButton;
