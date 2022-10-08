import React from 'react'
import {Box, Button, Flex, Text} from '@chakra-ui/react'
import style from '../Styles/Nav.module.css'
import {NavLink} from 'react-router-dom' 
const Navbar = () => {
  return (
    <Box className={style.Nav_container}>
      <Flex p="20px" alignItems={"center"}>
          <Box w="100%">
          <NavLink><Box fontSize={"40px"}>LOGO</Box></NavLink>
          </Box>
          <Box w="100%" display={"flex"} gap="50px" fontSize={"20px"} >
            <NavLink>HotStar</NavLink>
            <NavLink>NetFlix</NavLink>
            <NavLink>Amazon Prime</NavLink>
            <NavLink>More</NavLink>
          </Box>
          <Box w="100%" display="flex" justifyContent={"flex-end"}>
            <NavLink><Button border="1px solid gray">Login</Button></NavLink>
          </Box>
      </Flex>
    </Box>
  )
}

export default Navbar