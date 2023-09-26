import { Swiper, SwiperSlide } from 'swiper/react';
// modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';


const Carousel = ({movieList}) => {

    return (
        <SwiperWrapper>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2!!</SwiperSlide>
                <SwiperSlide>Slide 3!!!</SwiperSlide>
                <SwiperSlide>Slide 4!!!!</SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    );
};

export default Carousel;

const SwiperWrapper = styled.div`
    max-width: 1000px;
    margin: 0 10%;
    height: 300px;
    background-color: #222;
`;
