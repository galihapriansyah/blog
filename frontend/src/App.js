import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Tutorial from "./pages/Tutorial.js";
import Lainnya from "./pages/Lainnya.js";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/lainnya" element={<Lainnya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
