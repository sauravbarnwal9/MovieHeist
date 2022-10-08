import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from '../Styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
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
// Handle Click
  function handleClick(id){
      console.log(id)
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
          <NavLink to="/home/"><Box className={style.category} id="HOTSTAR"><Text>HotStar</Text></Box></NavLink>
          <NavLink to=""><Box className={style.category} id="NETFLIX"><Text>Netflix</Text></Box></NavLink>
          <NavLink to=""><Box className={style.category} id="AMZN"><Text>Amazon Prime</Text></Box></NavLink>
          <NavLink to=""><Box className={style.category}><Text>More</Text></Box></NavLink>
        </SimpleGrid>
       </Box>
    </Box>
  )
}

export default Homepage