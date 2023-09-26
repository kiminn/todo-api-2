import { axiosInstance } from "./core";

export const get_video = (setVideo, movie_id) => {
  axiosInstance
    .get(`movie/${movie_id}/videos`)
    .then((res) => {
      setVideo(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
