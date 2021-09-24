import React, { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import Spinner from "../Spinner";

// import { Banner } from "../../API/API";
import {
  Button,
  Contents,
  Dots,
  DotsWrapper,
  Heading,
  Text,
  Wapper,
} from "./styles";

// type TestState = {bannerDataBanner}
const BannerContainer = ({ bannerData }) => {
  // console.log(bannerData);
  // const [bannerItems, setBannerItems] = useState({});
  // const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  // if (loading) return <Spinner />;

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
            bannerData[currentBanner]?.orignal_title ||
            bannerData[currentBanner]?.name ||
            bannerData[currentBanner]?.original_name}
        </Heading>
        <Button>More Info</Button>
        {/* Truncate OverView */}

        <Text>{truncate(bannerData[currentBanner]?.overview, 200)}</Text>
        <DotsWrapper>
          {Array.from({ length: 5 }).map((item, index) =>
            currentBanner === index ? (
              <Dots active onClick={() => ChangeBanner(index)} />
            ) : (
              <Dots onClick={() => ChangeBanner(index)} />
            )
          )}
        </DotsWrapper>
      </Contents>
    </Wapper>
  );
};

export default BannerContainer;
