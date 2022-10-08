import './App.css';
import {Box} from '@chakra-ui/react'
import MainRoutes from './Routes/MainRoutes';
import Card from './components/Card';
import Recommend from './components/Recommend';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Box marginBottom={"20px"} height="120px"><Navbar/></Box>
      <MainRoutes /> 
    </>
  );
}

export default App;
