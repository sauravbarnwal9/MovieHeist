import { Box, Flex, Image} from '@chakra-ui/react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination ,Navigation} from "swiper";

function Recommend() {
  return (
    <Box w={'100%'}  mb='5rem' p="3rem" pt="0rem">
        <Box fontSize={'2xl'} fontWeight='semibold' fontFamily={'cursive'} padding='0.5rem' >More Like This</Box>
        <Box padding={'1rem'} paddingTop={"0rem"} h='100%' >
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg?20220707074919' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLTbRKj_3q0LkjXcSHDL8LbwY6TbY5Dj-VSLd9ZwvrlVTRNkj' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSy7CgiiiiJSr9NXfKARKzxwrqOiEW4e_hTss90U0Gi3CfuYA2-' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ3bx1OTMXdhPD-oUZf-bKZHte5IbKDJgdRVzAEjh8DKtjzDnfU' alt='Dan Abramov'/>
 </SwiperSlide>
        <SwiperSlide >
        <Image w='100%' h='100%' borderRadius={'0.5rem'} src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
 </SwiperSlide>
        
      </Swiper>
            </Box>
   </Box>
  )
}

export default Recommend
