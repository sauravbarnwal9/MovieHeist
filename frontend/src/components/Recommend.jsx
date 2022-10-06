import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

function Recommend() {
  return (
    <Box w={'100%'}h="150px" border={'1px solid green'}>
        <Flex fontSize={'2xl'} fontWeight='semibold' fontFamily={'cursive'} padding='0.5rem'>More Like This</Flex>
        
    </Box>
  )
}

export default Recommend
