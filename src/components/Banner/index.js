import React, { useEffect, useState } from "react";
import API from "../../API";

import Spinner from "../Spinner";

import { useContentFetch } from "../../hooks/useContentFetch";
// import { Banner } from "../../API/API";
import { Contents, Dots, DotsWrapper, Heading, Text, Wapper } from "./styles";
import { Link } from "react-router-dom";
import ErrorPage from "../../containers/ErrorPage";
import PrimaryButton from "../Buttons/Primary";
const BannerContainer = () => {
  const { contentState, loading, error } = useContentFetch(
    API.fetchTrendingThisWeek(),
    "HomeBanner"
  );
  var DataLength = 7;
  var sliced = [];
  for (var i = 0; i < DataLength; i++) sliced[i] = contentState.results[i];
  if (error) return <ErrorPage />;
  if (loading) return <Spinner />;
  return (
    <>
      {contentState.page > 0 && (
        <BannerContainerChild bannerData={sliced} DataLength={DataLength} />
      )}
    </>
  );
};
const BannerContainerChild = ({ bannerData, DataLength }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    // setLoading(true);
    const timer = setInterval(() => {
      setCurrentBanner(
        currentBanner === DataLength - 1 ? 0 : currentBanner + 1
      );
    }, 10000);
    // setLoading(false);
    return () => {
      clearInterval(timer);
    };
  }, [DataLength, currentBanner]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const ChangeBanner = (index) => {
    setCurrentBanner(index);
  };
  return (
    <Wapper
      backdrop={
        // "dsfsd"
        bannerData[currentBanner].backdrop_path
      }
    >
      <Contents>
        <Heading>
          {bannerData[currentBanner]?.title ||
            bannerData[currentBanner]?.name ||
            bannerData[currentBanner]?.orignal_title ||
            bannerData[currentBanner]?.original_name}
        </Heading>

        <Link
          to={
            bannerData[currentBanner]?.title ||
            bannerData[currentBanner]?.orignal_title
              ? `/movie/${bannerData[currentBanner].id}`
              : `/tv/${bannerData[currentBanner].id}`
          }
        >
          <PrimaryButton title="More Info" callback={() => {}} />
        </Link>
        {/* Truncate OverView */}

        <Text>{truncate(bannerData[currentBanner]?.overview, 150)}</Text>
        <DotsWrapper>
          {Array.from({ length: DataLength }).map((item, index) =>
            currentBanner === index ? (
              <Dots key={index} active onClick={() => ChangeBanner(index)} />
            ) : (
              <Dots key={index} onClick={() => ChangeBanner(index)} />
            )
          )}
        </DotsWrapper>
      </Contents>
    </Wapper>
  );
};

export default BannerContainer;
