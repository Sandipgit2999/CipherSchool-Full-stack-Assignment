import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Allroutes from "./Routes/Allroutes";
import { Box } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Navbar />

      <Box display={"flex"}>
        <Sidebar />
        <Allroutes />
      </Box>
    </Box>
  );
}

export default App;
