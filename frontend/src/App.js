import './App.css';
import {Box} from '@chakra-ui/react'
import MainRoutes from './Routes/MainRoutes';
import Navbar from './Components/Navbar';
import Loading from './Components/loading';
function App() {
  return (
    <>
    <Box marginBottom={"20px"} height="120px"><Navbar/></Box>
      <Loading/>
      <MainRoutes /> 
    </>
  );
}

export default App;
