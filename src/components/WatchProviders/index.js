import React, { useState } from "react";
import API from "../../API-V2";
import { useContentFetch } from "../../hooks/useContentFetch";
import Row from "./Row";
import Spinner from "../Spinner";
import { Button, ButtonContainer, Title, Wrapper } from "./styles";

const WatchProviders = () => {
  const { contentState, loading, error } = useContentFetch(
    API.fetchWatchProviders(),
    "WatchProviders"
  );
  // Object.keys(contentState.results).length

  var DataLength = 10;
  if (Object.keys(contentState.results).length > DataLength - 1) {
    var sliced = [];
    for (var i = 0; i < DataLength; i++) sliced[i] = contentState.results[i];
  }
  if (loading) return <Spinner />;
  return (
    <>
      {Object.keys(contentState.results).length > DataLength && (
        <WatchProvidersChild WatchProvidersData={sliced} />
      )}
    </>
  );
};

const WatchProvidersChild = ({ WatchProvidersData }) => {
  const [currentWatchProviderIndex, setCurrentWatchProviderIndex] = useState(0);
  const [currentWatchProviderName, setCurrentWatchProviderName] = useState(
    WatchProvidersData[0].provider_name
  );
  const [currentWatchProviderID, setCurrentWatchProviderID] = useState(
    WatchProvidersData[0].provider_id
  );
  const handleButtonClick = (index, id, name) => {
    setCurrentWatchProviderIndex(index);
    setCurrentWatchProviderID(id);
    setCurrentWatchProviderName(name);
    // name = `${name}`
  };
  return (
    <Wrapper>
      <Title>Whats Streaming</Title>
      <ButtonContainer>
        {WatchProvidersData.map((watchProvider, index) =>
          currentWatchProviderIndex === index ? (
            <Button
              key={index}
              active
              // onClick={() =>
              //   handleButtonClick(index, watchProvider.provider_id)
              // }
            >
              {watchProvider.provider_name}
            </Button>
          ) : (
            <Button
              key={index}
              onClick={() =>
                handleButtonClick(
                  index,
                  watchProvider.provider_id,
                  watchProvider.provider_name
                )
              }
            >
              {watchProvider.provider_name}
            </Button>
          )
        )}
      </ButtonContainer>
      {/* <Button>{currentWatchProviderIndex}</Button>
      <Button>{currentWatchProviderName}</Button> */}
      <Row
        id={currentWatchProviderID}
        watchProviderName={currentWatchProviderName}
      />
    </Wrapper>
  );
};
export default WatchProviders;
