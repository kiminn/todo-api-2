import { useEffect, useState } from 'react';
import { get_popularMovie } from '../../../apis/popular.api';
import styled from 'styled-components';
import OneMovie from '../../../components/oneMovie';
import { get_topRatedMovie } from '../../../apis/top-rated.api';

const TopRated = () => {
    const [topRatedMovie, setTopRatedMovie] = useState([]);

    useEffect(() => {
        get_topRatedMovie(setTopRatedMovie);
    }, []);

    useEffect(() => {
        console.log(`topRatedMovie:`, topRatedMovie);
    }, [topRatedMovie]);

    return (
        <S.Wrapper>
            <S.Title>Top-Rated Movies</S.Title>
            {topRatedMovie.map(({ id, title, poster_path, overview, vote_average }) => {
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
    );
};

export default TopRated;

const Wrapper = styled.div`
    margin: 0 10%;
    max-width: 1460px;
    padding-top: 100px;
    width: 100%;
`;

const Title = styled.p`
    margin: 1% 5%;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

const S = {
    Wrapper,
    Title,
};
