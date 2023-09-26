import { axiosInstance } from "./core";

export const get_movieDetail = (setDetailMovie, id) => {
  axiosInstance
    .get(`/movie/${id}`)
    .then((res) => {
      let movieData = res.data;
      setDetailMovie(movieData);
      console.log(movieData);
    })
    .catch((err) => {
      console.log(err);
    });
};
