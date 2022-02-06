import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import PictureToDisplay from "./PictureToDisplay";

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("cate");
  console.log(categories);
  console.log("gories");


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
    <Global>
      <Container>
        <img src="http://localhost:5500/pictures/soleil_couchant-8129.jpg" alt="soleil couchant " />
      </Container>
      {categories.map((cat) => (
        <>
          <h2 key={cat.id} >{cat.name}</h2>
          <Mapping>
            {pictures.filter((el) => el.categories.name === cat.name)
              .map((p) => (
                <PictureToDisplay pictures={p} key={p.id} to={`pictures/:id`} />
              ))}
          </Mapping>
        </>
      )
      )}
    </Global>
  );
}

const Global = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
`

const Mapping = styled.div`
/* width: 90%; */
display: flex;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Container = styled.div`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export default Home;