import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import SeachBar from "../../components/SearchBar";
import { PageContainer } from "./styles";
import Grid from "../../components/Grid";
import API from "../../API";
import WatchProvider from "../../components/WatchProviders";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import Spinner from "../../components/Spinner";
import ErrorPage from "../ErrorPage";
import Thumbnail from "../../components/Thumbnail";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config";
import NoImage from "../../assets/images/NoImage.png";
import LoadMoreButton from "../../components/Buttons/LoadMore";
import Breadcrumb from "../../components/Breadcrumb";

const HomePage = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setLoadingMore } =
    useHomeFetch();

  if (error) return <ErrorPage />;
  if (loading) return <Spinner />;
  return (
    <PageContainer>
      {/* Navbar */}
      <Navbar>
        <div className="text-white"> {searchTerm}</div>
        <SeachBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Navbar>

      {!searchTerm ? (
        <>
          {/* No Search Term */}
          <Banner />

          <Row
            title="In Theatres"
            name="InTheatres"
            fetchURL={API.fetchInTheatres()}
          />
          <WatchProvider />
        </>
      ) : (
        <>
          {/* Search Term */}
          {Object.keys(state.results).length > 0 && (
            <>
              <Breadcrumb
                onClickHome={() => setSearchTerm("")}
                contentTitle="Search Movie/Tv"
              />
              <div className="m-10">
                <Grid>
                  {state.results.map((content) => (
                    <>
                      {console.log(`content`, content)}
                      <Thumbnail
                        key={content.id}
                        clickable={true}
                        linkTo={
                          content?.title || content?.original_title
                            ? `/movie/${content.id}`
                            : `/tv/${content.id}`
                        }
                        image={
                          content.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${content.poster_path}`
                            : NoImage
                        }
                        small
                      />
                    </>
                  ))}
                </Grid>
              </div>
              {loading && <Spinner />}
              {state.page < state.total_pages && !loading && (
                <LoadMoreButton
                  title="Load More"
                  callback={() => setLoadingMore(true)}
                />
              )}
            </>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default HomePage;
