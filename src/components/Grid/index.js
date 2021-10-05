import React from "react";

// styles
import { Wrapper, Content } from "./styles";
const Grid = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
