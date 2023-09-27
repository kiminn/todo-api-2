import { axiosInstance } from "./core";

export const get_nowPlayingMovie = (setNowPlayingMovie) => {
  axiosInstance
    .get("/movie/now_playing")
    .then((res) => {
      let nowPlayingMovie = res.data.results;
      setNowPlayingMovie(nowPlayingMovie);
    })
    .catch((err) => {
      console.log(err);
    });
};