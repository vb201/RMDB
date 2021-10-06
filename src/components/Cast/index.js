import React from "react";

import { Wrapper, Image, CastWrapper } from "./styles";

const Cast = ({ name, character, imageUrl }) => {
  return (
    <CastWrapper>
      <Image src={imageUrl} alt="actor-thumbnail" />
      <div className="pt-5 text-xl font-semibold">{name}</div>
      <div className="pb-2 m-auto">{character}</div>
    </CastWrapper>
  );
};

export default Cast;
