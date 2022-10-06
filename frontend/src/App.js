import './App.css';
import {Box} from '@chakra-ui/react'
import MainRoutes from './Routes/MainRoutes';
import Card from './components/Card';
import Recommend from './components/Recommend';
function App() {
  return (
    <Box className="App" >
      <Card/>
      <Recommend/>
    </Box>
  );
}

export default App;
