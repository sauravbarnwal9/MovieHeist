import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../Styles/Hotstar.module.css'
const HotStar = () => {
const [hot,setHot] = useState([])
const getData = () =>{
    axios.get("http://localhost:8000/data/get")
    .then((r)=>setHot(r.data.movies))
    .catch((err)=>console.log(err))
}
const nav = useNavigate()
//  get movie ID
const handleData = (id) =>{
    localStorage.setItem("id",id)
    nav(`/home/movies/${id}`)
    window.location.reload()
}
useEffect(() => {
  getData()
}, [])

  return (
    <Box>
      <SimpleGrid columns={4} spacing="20" w="90%" h="fit-content" p="40px" margin={"auto"} >
      {
            hot.map((item,index)=>{
                return <Box className={style.cards} key={index} onClick={()=>handleData(item._id)}>
                     <Img src={item.profile} h="250px" w="100%" />
                     <Text fontSize={"30px"} color="black">{item.name}</Text>
                     <Text color="black">{item.year}</Text>
                </Box>
            })
         }
         
      </SimpleGrid>
    </Box>
  )
}

export default HotStar