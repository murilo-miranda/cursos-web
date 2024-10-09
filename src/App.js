import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </Flex>
  );
}

export default App;
