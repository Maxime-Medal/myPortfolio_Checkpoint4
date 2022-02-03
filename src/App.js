import { useEffect, useState } from "react";
import axios from "axios";

// import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import GlobalStyle from "./components/style/GlobalStyle";
import ReturnHome from "./components/ReturnHome";

function App() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/api/pictures")
      .then((res) => setPictures(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("pict");
  console.log(pictures);
  console.log("ture");

  return (
    <>
      <GlobalStyle />
      <ReturnHome />
      <h1>Accueil</h1>
      <Home pictures={pictures} />
      {/* <Routes> */}
      {/* <Route path="/pictures/:id" element={} /> */}
      {/* </Routes> */}
      <Footer />
    </>
  );
}

export default App;
