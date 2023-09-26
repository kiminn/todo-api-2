import { useEffect, useState } from "react";
import { get_movieList } from "../../apis/movieList";
import Header from "../../components/layout/header";
import { useSearchParams } from "react-router-dom";
import OneMovie from "../../components/oneMovie";
import styled from "styled-components";

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let keyword = query.get("q");
  useEffect(() => {
    get_movieList(setMovieList);
  }, []);

  const movieSearchList = movieList.filter((movie) => movie.title.toUpperCase().includes(keyword.toUpperCase()));
  console.log(movieSearchList);
  return (
    <div>
      <Header />
      <Wrapper>
        {movieSearchList.length === 0
          ? "Movie Not Found😥"
          : movieSearchList.map(({ id, title, poster_path, overview, vote_average, backdrop_path }) => {
              return (
                <>
                  <OneMovie movie_id={id} title={title} poster_path={poster_path} overview={overview} vote_average={vote_average} />
                  {/* <Slider backdrop_path={backdrop_path} /> */}
                </>
              );
            })}
      </Wrapper>
    </div>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  margin: 0 10%;
  padding-top: 100px;
  width: 100%;
  max-width: 1500px;
`;
