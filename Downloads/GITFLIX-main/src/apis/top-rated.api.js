import { axiosInstance } from "./core";

export const get_topRatedMovie = (setTopRatedMovie) => {
  axiosInstance
    .get("/movie/top_rated")
    .then((res) => {
      let topRatedMovie = res.data.results;
      setTopRatedMovie(topRatedMovie);
    })
    .catch((err) => {
      console.log(err);
    });
};