import { AspectRatio, Badge, Box, Button, Center,Flex,Image, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiFillFileExcel, AiOutlinePlus,AiOutlineShareAlt } from "react-icons/ai";
import Recommend from './Recommend';
import '../Styles/Movies.css'
function Card() {
   const id = localStorage.getItem("id")
   const [data,setData] = useState([])
   const getData = async() =>{
    await axios.get(`http://localhost:8000/data/get?_id=${id}`)
    .then((r)=>setData(r.data.movies[0]))
    .catch((err)=>console.log(err))
   }
   console.log(data)
   useEffect(()=>{
    getData()
   },[])
  return (
    <>
    <Box className='section' h='100%' w='100%'>
  {/* Video  */}
   <Box  border='1px solid green' className='movie' bg="black" >  <AspectRatio maxW='100%'  ml='1rem' ratio={16/9}>
  
     <iframe
     w="100%"
    title='naruto'
    src={data.url}
    allowFullScreen
  />
  </AspectRatio></Box>
{/* video end */}



<Box  ratio={16/9}    className="sidebar" border='1px solid green' backgroundImage={'linear-gradient(to right, purple , blue)'} >

<Box mt='2rem'>
<Box fontStyle={'revert-layer'} fontWeight="bold" id="heading" color="#fff ">{data.name}</Box>
<Box fontStyle={'oblique'} fontWeight="bold"  className='description' color="#fff ">Genre:Mystery</Box>
<Box fontStyle={'oblique'} fontWeight="bold"  className='description' color="#fff ">Language:Hindi</Box>
<Box fontStyle={'oblique'} fontWeight="bold"  className='description'  color="#fff ">Rating: 4.5☆</Box>
<Box fontStyle={'italic'}fontWeight='semibold' color={'gray.400'} className='description'>When a small town gets plunged into the nightmare of serial killings, rookie cop Arjan embarks on a chase for the truth and unravels a gruesome conspiracy.</Box>
</Box>
<Flex w='100%' mt='4rem'  justifyContent='space-between'>
    
   <Box> <Button leftIcon={<AiOutlinePlus />}  size='lg' colorScheme='purple' variant='outline'>
    WATCHLIST
  </Button></Box>
    
   <Box> <Button leftIcon={<AiOutlineShareAlt />}  size='lg' colorScheme='purple' variant='outline'>
    SHARE
  </Button></Box>
</Flex>
</Box>
{/* Side Bar End */}
   
  </Box>
   {/* Slider */}
   <Recommend />
  </>
  )
}

export default Card
