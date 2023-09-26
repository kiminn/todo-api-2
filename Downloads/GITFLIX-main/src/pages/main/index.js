import { useEffect, useState } from 'react';
import { get_movieList } from '../../apis/movieList';
import OneMovie from '../../components/oneMovie';
import Header from '../../components/layout/header';
import styled from 'styled-components';
import Carousel from './components/carousel';


const MainPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    get_movieList(setMovieList);
  }, []);

  useEffect(() => {
    console.log(`movieList:`, movieList);
  }, [movieList]);
  //   const queryClient = useQueryClient();
  //   const { data } = useQuery(["getMovie"], get_movieList);
  //   console.log(data);



    return (
        <>
            <Header movieList={movieList} setMovieList={setMovieList} />
            <S.Wrapper>
                <Carousel movieList={movieList} />
                {movieList.map(({ id, title, poster_path, overview, vote_average }) => {
                    return (
                        <>
                            <OneMovie
                                movie_id={id}
                                title={title}
                                poster_path={poster_path}
                                overview={overview}
                                vote_average={vote_average}
                            />
                        </>
                    );
                })}
            </S.Wrapper>
        </>
    );


};

export default MainPage;

const Wrapper = styled.div`

    margin: 0 10%;
    max-width: 1460px;
    padding-top: 100px;
    width: 100%
`


const S = {
  Wrapper,
};
