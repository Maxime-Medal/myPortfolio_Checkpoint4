import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Pict } from "../components/common";

const PictureDetail = () => {
  const { id } = useParams();
  const [onePicture, setOnePicture] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/pictures/${id}`)
      .then((res) => setOnePicture(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!onePicture) {
    return null
  }

  return (
    <Container>
      <OnePict>
        <img src={`http://localhost:5500/${onePicture.link}`} alt={onePicture.title} />
      </OnePict>
      <h3>{onePicture.title}</h3>
      <ul>
        <li>{onePicture.details} </li>
      </ul>
      {/* <h4>Materiel utilisé :</h4>
      <p>  {onePicture.materials.name} </p> */}
    </Container>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`

const OnePict = styled(Pict)`
  width: 95%;
  height: 88vh;
  margin-top: 2em;
  
`

export default PictureDetail;