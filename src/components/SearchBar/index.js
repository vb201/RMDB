import React, { useState, useEffect, useRef } from "react";

// Search Icon
import seachIcon from "../../assets/images/search-icon.svg";

// Styles
import { Wrapper, Content } from "./styles";

const SeachBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={seachIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SeachBar;
