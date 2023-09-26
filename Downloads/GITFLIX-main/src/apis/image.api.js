import { axiosInstance } from './core';

export const get_image = (setImage, movie_id) => {
    axiosInstance
        .get(`movie/${movie_id}/images`)
        .then((res) => {  
            setImage(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
