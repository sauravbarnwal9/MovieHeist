import { AspectRatio, Badge, Box, Button, Center,Flex,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { AiFillFileExcel, AiOutlinePlus,AiOutlineShareAlt } from "react-icons/ai";
function Card() {
  
  return (
    <Box display={"flex"} mt='5rem'>
  {/* Video  */}
   <Box  border='1px solid green' w='70%'  >  <AspectRatio maxW='100%'  ml='1rem' ratio={16/9}>
  
     <iframe
    title='naruto'
    src='https://mvzones.b-cdn.net/GODFATHER_HINDI.mp4'
    allowFullScreen
  />
  </AspectRatio></Box>
{/* video end */}



<Box  w='30%' border='1px solid green' backgroundImage={'linear-gradient(to right, purple , blue)'} padding='1.5rem'>

<Box mt='2rem'>
<Box fontStyle={'revert-layer'} fontWeight="bold" fontSize={'4xl'}>Cuttputlli - Trailer</Box>
<Box fontStyle={'oblique'} fontWeight="bold" fontSize={'xl'}>Genre:Mystery</Box>
<Box fontStyle={'oblique'} fontWeight="bold" fontSize={'xl'}>Language:Hindi</Box>
<Box fontStyle={'oblique'} fontWeight="bold" fontSize={'xl'}>Rating: 4.5☆</Box>
<Box fontStyle={'italic'}fontWeight='semibold' color={'gray.400'} mt='0.5rem' fontSize={"md"}>When a small town gets plunged into the nightmare of serial killings, rookie cop Arjan embarks on a chase for the truth and unravels a gruesome conspiracy.</Box>
</Box>
<Flex w='100%' mt='4rem'  justifyContent='space-between'>
    
   <Box> <Button leftIcon={<AiOutlinePlus />} size='lg' colorScheme='purple' variant='outline'>
    WATCHLIST
  </Button></Box>
    
   <Box> <Button leftIcon={<AiOutlineShareAlt />} size='lg' colorScheme='purple' variant='outline'>
    SHARE
  </Button></Box>
</Flex>
</Box>
{/* Side Bar End */}


  </Box>
  )
}

export default Card
