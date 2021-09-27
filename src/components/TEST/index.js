import React from "react";
import API from "../../API-V2";
import { useContentFetch } from "../../hooks/useContentFetch";
const TEST = ({ fetchURL, name }) => {
  const { contentState, loading, error } = useContentFetch(fetchURL, name);

  // console.log(`From TEST: ${contentState}`);
  console.log(`From TEST`, contentState);
  return <h1>hello</h1>;
};

export default TEST;
