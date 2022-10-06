import React, { useState } from 'react'
import styles from '../Styles/Login.module.css' ;
import {Box, Button, FormControl, FormLabel, Heading, Input, Text} from '@chakra-ui/react'
import {Link, NavLink} from 'react-router-dom'
const Login = () => {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
  return (
    <Box className={styles.login_container}>
        <Heading>Login</Heading><br/><br/>
        <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      /><br/><br/>
        <FormLabel>Password</FormLabel>
      <Input
        type='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      /><br/><br/>
      <Button p="10px">Login &nbsp; <img src="https://img.icons8.com/ios-glyphs/30/000000/login-rounded-right--v1.png" alt=""/></Button>
    </FormControl><br/>
    <Text>New user?&nbsp;&nbsp; <Link to="/signup">Signup</Link></Text>
    </Box>
  )
}

export default Login