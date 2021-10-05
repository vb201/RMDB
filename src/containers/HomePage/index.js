import React, { useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import SeachBar from "../../components/SearchBar";
import { PageContainer } from "./styles";

import API from "../../API-V2/";
import WatchProvider from "../../components/WatchProviders";

const HomePage = () => {
  // const [region, setRegion] = useState("US");
  // const [content, setContent] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  // var sliced = [];
  // for (var i = 0; i < 5; i++) sliced[i] = bannerState.results[i];
  // console.log(sliced);
  // const sliced = Object.fromEntries(
  //   Object.entries(bannerState.results).slice(0, 6)
  // )

  return (
    <PageContainer>
      {/* Navbar */}
      <Navbar>
        <SeachBar setSearchTerm={setSearchTerm} />
      </Navbar>
      {/* Banner */}
      <Banner />
      {/* In Theaters */}

      <Row
        title="In Theatres"
        name="InTheatres"
        fetchURL={API.fetchInTheatres()}
      />
      <WatchProvider />
      {/* <TEST
        title="In Theatres"
        name="InTheatres"
        fetchURL={API.fetchInTheatres()}
      /> */}
    </PageContainer>
  );
};

export default HomePage;
