// import { useEffect, useState } from "react";
// import axios from "axios";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import GlobalStyle from "./components/style/GlobalStyle";
import ReturnHome from "./components/ReturnHome";
import PictureDetail from "./pages/PictureDetail.js";

function App() {


  return (
    <>
      <GlobalStyle />
      {/* <ReturnHome /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures/:id" element={<PictureDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
