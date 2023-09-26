import { axiosInstance } from "./core";

export const get_movieList = (setMovieList) => {
  axiosInstance
    .get("/discover/movie")
    .then((res) => {
      let movie_list = res.data.results;
      setMovieList(movie_list);
    })
    .catch((err) => {
      console.log(err);
    });
};
