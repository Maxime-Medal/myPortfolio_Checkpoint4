// require('dotenv').config();
// import CardPicture from "./CardPicture";
// import styled from "styled-components";

const Home = ({ pictures }) => {



  return (
    <>
      <h1>home page!</h1>

      <ul>
        {pictures.map((p) => (
          <li key={p.id} >
            <h2> {p.title} </h2>
            <img src={`http://localhost:5500/${p.link}`} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
