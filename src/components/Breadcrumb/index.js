import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./styles";

const Breadcrumb = ({ contentTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{contentTitle}</span>
      </Content>
    </Wrapper>
  );
};

export default Breadcrumb;
