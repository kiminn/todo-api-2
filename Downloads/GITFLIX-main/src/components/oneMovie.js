import { useEffect, useState } from "react";
import { get_image } from "../apis/image.api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { get_movieDetail } from "../apis/detail.api";

const OneMovie = ({ movie_id, title, poster_path, overview, vote_average }) => {
  // const [posters, setPosters] = useState([]);
  const [image, setImage] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  // content, 평점 랜더링 여부를 state로 정의
  const [isShowContent, setIsShowContent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    get_image(setImage, movie_id);
  }, []);


  const goToMovieDetail = () => {
    console.log(movie_id);
    navigate(`/detail/?q=${movie_id}`);
  };


    return (
        <S.MovieContainer onClick={goToMovieDetail}>
            {poster_path ? (
                <>
                    <S.Poster src={`${imgUrl}${poster_path}`} />
                    {/* hover시의 효과를 주기위해서 */}
                    <S.InnerText className="hoverComponent">
                        <S.Title>{title}</S.Title>
                        <S.OverView>{overview}</S.OverView>
                        <S.Rating>⭐️ {vote_average}</S.Rating>
                    </S.InnerText>
                </>
            ) : (
                <S.Poster src="img/noimage.png"></S.Poster>
            )}
        </S.MovieContainer>
    );

};

export default OneMovie;


const MovieContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px 70px;
    cursor: pointer;
    img {
        transition: all 0.2s linear;
    }
    &:hover {
        .hoverComponent {
            opacity: 1;
        }
        img {
            transform: scale(1.15);
        }
    }
`;

const Poster = styled.img`
    border-radius: 4px;
`;

const InnerText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    z-index: 7;
    width: 115%;
    height: 115%;
    padding: 20px;
    border-radius: 4px;
    transition: opacity 0.7s;
    background-color: rgba(180, 20, 220, 0.3);
    text-align: left;
    transform: translate(-50%, -50%);
`;

const Title = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    width: 300px;
    padding-bottom: 2%;
`;

const OverView = styled.div`

    border-top: 1px solid white;
    padding-top: 30px;
    line-height: 1.2;
    height: 7.5;
    width: 12em;
    // 여러줄 말줄임
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;

const Rating = styled.div`
    padding-top: 50px;
`

const S = {
    Poster,
    Title,
    MovieContainer,
    OverView,
    InnerText,
    Rating

};
