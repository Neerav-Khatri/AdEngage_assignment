import { Flex, Text } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Routes/Allroutes';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Flex p={"20px"} justifyContent={"space-evenly"} alignItems={"center"} fontWeight={"bold"} bgColor={"#e9d5ef"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          <Link to="/">
            <Text fontSize={"20px"}>Login</Text>
          </Link>
          <Link to="/add">
            <Text fontSize={"20px"}>Add Images</Text>
          </Link>
          <Link to="/image">
            <Text fontSize={"20px"}>Images</Text>
          </Link>
      </Flex>
      <AllRoutes />
    </div>
  );
}

export default App;
