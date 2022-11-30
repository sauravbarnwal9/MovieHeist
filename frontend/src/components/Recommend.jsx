import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Get_Data } from "../Redux/AppReducer/action";
import { useEffect } from "react";

function Recommend() {
       const [data,setData]=useState([])
const dispatch=useDispatch()

useEffect(()=>{
       dispatch(Get_Data())
       
       setData(dat.movies)
},[])
const dat=useSelector((store)=>store.AppReducer.Movie_Data)
  return (
    <Box w={"100%"} h="100%" mb="5rem" p="0rem" pt="0rem">
      <Box
        fontSize={"2xl"}
        fontWeight="semibold"
        fontFamily={"cursive"}
        padding="0.5rem"
      >
        More Like This
      </Box>
      <Box padding={"1rem"} paddingTop={"0rem"} h="100%">
        <Swiper
          // slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 5 },
            450: { slidesPerView: 3 },
            235: { slidesPerView: 2 },
          }}
          spaceBetween={30}
          slidesPerGroup={[3, 2, 5]}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
         {
         data.length&& data.map((el)=>
              
              <SwiperSlide w="100%">
              <Image
                h="100%"
                objectFit={"fill"}
                borderRadius={"0.5rem"}
src={el.profile}
                alt={el.name}
              />
            </SwiperSlide>
              )
         }
        </Swiper>
      </Box>
    </Box>
  );
}

export default Recommend;
