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
      <section class="triangle"></section>
      {categories.map((cat) => (
        <CardSection>
          <Title>
            <h2 key={cat.id} >{cat.name}</h2>
          </Title>
          <Mapping className="cardContainer" >
            {pictures
              .filter((el) => el.categories.name === cat.name)
              .sort((a, b) => new Date(a.shoot_date) - new Date(b.shoot_date))
              .map((p) => (
                <PictureToDisplay pictures={p} key={p.id} />
              ))}
          </Mapping>
        </CardSection>
      )
      )}
    </Global>
  );
}

const Global = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 background-color: black;

 .triangle {
  position: relative;
  background: #393939;
  /* height: 50vh; */
}

.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 27px 27px 0 27px;
  border-color: #393939 transparent transparent transparent;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}

`
const Container = styled.div`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 95vh;
    object-fit: cover;
  }
`

const Title = styled.div`
margin-top: 3em;

  h2{
    font-size: 1.8em;
    letter-spacing: .4rem;
  }

`

const CardSection = styled.div`

`

const Mapping = styled.div`
/* width: 90%; */
display: flex;
position: relative;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`


export default Home;