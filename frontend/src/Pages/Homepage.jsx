import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from '../Styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../Components/Navbar';
const Homepage = () => {
  const [carousel,setCarousel] = useState([])
  const getImage = () =>{
    axios.get("http://localhost:8000/data/get")
    .then((r)=>{
      setCarousel(r.data.movies)
      console.log(r.data.movies)
    })
    .catch((err)=>console.log(err))
  }
  useEffect(() => {
    getImage()
  }, [])
  
  return (
    <Box className={style.home_main}>
      {/* Slider */}
       <Box className={style.home_slider}>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay="true"
      modules={Autoplay}
      style={{
        height:"100%",
        // border:"1px solid red"
        
      }}
    >
      {
        carousel.map((item,index)=>{
          return <SwiperSlide key={index}>
             <Box className={style.cardItem} bgImage={item.profile}>
                <Box>
                <Text className={style.cardText}>{item.name}</Text>
                </Box>
             </Box>
          </SwiperSlide>
        })
      }
    </Swiper>
       </Box>
       <Box className={style.cards}>
        <SimpleGrid columns={[1,1,2,4]} spacing={10}>
          <Box className={style.category}><Text>HotStar</Text></Box>
          <Box className={style.category}><Text>Netflix</Text></Box>
          <Box className={style.category}><Text>Amazon Prime</Text></Box>
          <Box className={style.category}><Text>More</Text></Box>
        </SimpleGrid>
       </Box>
    </Box>
  )
}

export default Homepage