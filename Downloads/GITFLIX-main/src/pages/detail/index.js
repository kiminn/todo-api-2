import { useEffect, useRef, useState } from "react";
import { get_movieDetail } from "../../apis/detail.api";
import { useSearchParams } from "react-router-dom";
import { get_image } from "../../apis/image.api";
import { get_video } from "../../apis/video.api";
import styled from "styled-components";
// import YouTube from "react-youtube";
import { Typography } from "@mui/material";
import Header from "../../components/layout/header";


const DetailPage = () => {
  const [query, setQuery] = useSearchParams();
  // const ref = useRef(null);
  const id = query.get("q");
  const [detailMovie, setDetailMovie] = useState([]);
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  // const { data } = useQuery(["movieDetail", id], () => get_movieDetail(id));

  // const { videos } = data;

  // const videoId =
  //   videos.results.length > 0
  //     ? videos.results.find((result) => result.type === "Trailer").key
  //     : ""; // video Trailer 중에 가장 최신 동영상 가져오기

  useEffect(() => {
    console.log(id);
    get_movieDetail(setDetailMovie, id);
    get_image(setImage, id);
    get_video(setVideo, id);
  }, []);
  const videos = video.results;
  console.log(videos);
  // const trailer = v
  const trailer = videos && videos.filter((item) => item.name.includes("Teaser"));
  console.log(trailer);
  const key = trailer && trailer.map((tra) => tra.key);
  console.log(key);
  const TrailerKey = key && key.join();
  console.log(TrailerKey);

  return (

    <>
      <Header />
      <S.Wrapper>
        {/* <S.MovieFrame> */}
        {/* <YouTube
            videoId={videoId}
            ref={ref}
            allow="autoplay; encrypted-media; fullscreen"
            frameborder="0"
            opts={{
              width: "100%",
              // height: '708',
              playerVars: {
                autoplay: 1, // 자동재생 O
                rel: 0, // 관련 동영상 표시 X
                controls: 0, // 플레이어 컨트롤이 표시 X
                modestbranding: 1, // 컨트롤바에 youtube 로고 X
              },
            }}
          /> */}
        {/* </S.MovieFrame> */}

        <BackGround backdrop_path_src={detailMovie.backdrop_path}></BackGround>
        <img src={`${imgUrl}${detailMovie.poster_path}`} />
        <br />
        <br />
        <br />
        <Typography variant="h3" gutterBottom>
          Title : {detailMovie.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Tagline : {detailMovie.tagline}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Rating: ⭐️{detailMovie.vote_average}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Release Date : {detailMovie.release_date}
        </Typography>

        <br />
        <br />
        <br />
        <S.SectionInfo>
          <Typography variant="h3" gutterBottom>
            Overview
          </Typography>
          <Typography variant="h7" sx={{ lineHeight: 2 }}>
            {detailMovie.overview}
          </Typography>
        </S.SectionInfo>
        <br />
        <br />
        <br />
        <S.SectionInfo>
          <Typography variant="h4" gutterBottom>
            popularity : {detailMovie.popularity}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Runtime : {detailMovie.runtime}minute
          </Typography>
        </S.SectionInfo>
      </S.Wrapper>
    </>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin: 0 10%;
  padding-top: 100px;
  width: 100%;
  max-width: 1500px;
`;


const SectionInfo = styled.div``;

const Img = styled.div`
  width: 100%;
  max-width: 1500px;
`;

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ backdrop_path }) => backdrop_path});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const S = {
  Wrapper,
  SectionInfo,
  Img,
};

