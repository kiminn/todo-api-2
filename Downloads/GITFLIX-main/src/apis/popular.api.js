import { axiosInstance } from "./core";

export const get_popularMovie = (setPopularMovie) => {
  axiosInstance
    .get("/movie/popular")
    .then((res) => {
      let popularMovie = res.data.results;
      setPopularMovie(popularMovie);
    })
    .catch((err) => {
      console.log(err);
    });
};