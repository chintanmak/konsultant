import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";

function App() {
  return (
  <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
        </Route>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
