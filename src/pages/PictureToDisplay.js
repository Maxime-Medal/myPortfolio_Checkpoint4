// require('dotenv').config();
// import CardPicture from "./CardPicture";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Pict } from "../components/common";

const PictureToDisplay = ({ pictures }) => {


  return (
    <MainCard to={`pictures/${pictures.id}`} >
      {/* <MainCard to={`pictures/${id}`} > */}
      <Pict>
        <img src={`http://localhost:5500/${pictures.link}`} alt={pictures.title} />
      </Pict>
      <Describe>
        <li key={pictures.id} >
          <h2> {pictures.title} </h2>
        </li>
      </Describe>
    </MainCard>
  )
}

const MainCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30%;
  border: orange 2px solid;

  
`

const Describe = styled.div`
  text-align: center;
`

export default PictureToDisplay;
