import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';     
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';


const MovieCarousel = () => {

     const Movies: MovieCardType[] = [
      {
        title: "Jawan",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432498-rxzbzvumal-portrait.jpg",
        _id: "1",
        rating: 8.5,
        type: "Action"
      },
      {
        title: "Movie 2",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA2LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363553-bsunksefvn-portrait.jpg",
        _id: "2",
        rating: 7.5,
        type: "Drama"
      },
      {
        title: "Movie 3",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA2LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363553-bsunksefvn-portrait.jpg",
        _id: "2",
        rating: 7.5,
        type: "Drama"
      },
      {
        title: "Movie 4",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA2LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363553-bsunksefvn-portrait.jpg",
        _id: "2",
        rating: 7.5,
        type: "Drama"
      },
      {
        title: "Movie 5",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432498-rxzbzvumal-portrait.jpg",
        _id: "1",
        rating: 8.5,
        type: "Action"
      },
      {
        title: "Movie 6",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432498-rxzbzvumal-portrait.jpg",
        _id: "1",
        rating: 8.5,
        type: "Action"
      },
      {
        title: "Movie 7",
        imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432498-rxzbzvumal-portrait.jpg",
        _id: "1",
        rating: 8.5,
        type: "Action"
      }
    ];


  return (
    <div className="sliderout">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
                '@0.00':{
                    slidesPerView: 1,
                    spaceBetween: 2,
                }
                ,'@0.75':{
                    slidesPerView: 2,
                    spaceBetween: 2,
                },
                '@1.00':{
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
                '@1.50':{
                    slidesPerView: 4,
                    spaceBetween: 2,
                }
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {Movies.map((movie) => (
            <SwiperSlide >
               <MovieCard {...movie} />
            </SwiperSlide>
            ))}
        </Swiper>
    </div>     
  )
}

export default MovieCarousel