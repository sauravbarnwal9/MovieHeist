import './App.css';
import {Box} from '@chakra-ui/react'
import MainRoutes from './Routes/MainRoutes';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Box marginBottom={"100px"} height="120px"><Navbar/></Box>
      <MainRoutes /> 
    </>
  );
}

export default App;
