

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg"
        },{
            imgUrl: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751629407438_thallimanasuushaparinayamdesktop.jpg"
        }
    ]);
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={banner.imgUrl}
                        alt={`Banner ${index + 1}`}
                        width={width}
                        height={height / 2}
                        style={{ objectFit: 'cover' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HomeSlider;