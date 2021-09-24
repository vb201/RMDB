import React, { useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import SeachBar from "../../components/SearchBar";
import Spinner from "../../components/Spinner";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import { PageContainer } from "./styles";

const HomePage = () => {
  // const [searchTerm, setSearchTerm] = useState('')
  const {
    bannerState,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setLoadingMore,
  } = useHomeFetch();
  console.log(bannerState);

  var sliced = [];
  for (var i = 0; i < 5; i++) sliced[i] = bannerState.results[i];
  // console.log(sliced);
  // const sliced = Object.fromEntries(
  //   Object.entries(bannerState.results).slice(0, 6)
  // );

  // console.log(sliced);

  if (loading) return <Spinner />;
  return (
    <PageContainer>
      <Navbar>
        <SeachBar setSearchTerm={setSearchTerm} />
      </Navbar>
      <Banner bannerData={sliced} />
    </PageContainer>
  );
};

export default HomePage;
