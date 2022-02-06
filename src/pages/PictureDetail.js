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

  return (
    <Container>
      <OnePict>
        <img src={`http://localhost:5500/${onePicture.link}`} alt={onePicture.title} />
      </OnePict>
      <h3>{onePicture.title}</h3>
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
`

export default PictureDetail;