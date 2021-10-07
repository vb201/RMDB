import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./styles";

const Breadcrumb = ({ contentTitle, onClickHome }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <div onClick={onClickHome}>Home</div>
        </Link>
        <div>|</div>
        <div>{contentTitle}</div>
      </Content>
    </Wrapper>
  );
};

export default Breadcrumb;
