import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Signup.module.css'
const Signup = () => {
  return (
    <Box className={styles.login_container}>
        <Heading>Signup</Heading><br/><br/>
        <FormControl>
        <FormLabel>Name</FormLabel>
      <Input
        type='text'
      /><br/><br/>
      <FormLabel>Email</FormLabel>
      <Input
        type='email'
      /><br/><br/>
        <FormLabel>Password</FormLabel>
      <Input
        type='Password'
      /><br/><br/>
       <FormLabel>Confirm Password</FormLabel>
      <Input
        type='Password'
      /><br/><br/>

      <Button p="10px">Signup &nbsp; <img src="https://img.icons8.com/ios-glyphs/30/000000/login-rounded-right--v1.png" alt=""/></Button>
    </FormControl><br/>
    <Text>Already a user?&nbsp;&nbsp; <Link to="/login">Login</Link></Text>
    </Box>
  )
}

export default Signup