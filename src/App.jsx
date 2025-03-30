import { Routes, Route } from "react-router-dom";
import BrokenHeartSyndrome from "./pages/Broken_heart_syndrome/BrokenHeartSyndrome.jsx"
import './App.css'


const App  = () => {
    return (
      <>
        <Routes>
          {/* <Route path="/BrokenHeart" element={<BrokenHeartSyndrome />}> </Route> */}
          <Route path="/" element={<BrokenHeartSyndrome />}> </Route> 
        </Routes>
      </>
    )
  }


  

export default App
