// require('dotenv').config();
// import CardPicture from "./CardPicture";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PictureToDisplay = ({ pictures }) => {

  const MainCard = styled(NavLink)`
  background-image: url(${`http://localhost:5500/${pictures.link}`});
  background-size: cover;
  background-position: center;
  flex-flow: wrap;
  flex-direction: column;
  width: 300px;
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.5s;
  position: relative;
  box-shadow: 0 0 15px rgb(17, 31, 78);
  text-decoration: none;
  
  :hover {
    transform: translateY(-10px);
  }
  `;


  return (
    <MainCard backGroundImage={`http://localhost:5500/${pictures.link}`} className="mainCard" to={`pictures/${pictures.id}`} >
      <Describe className="describe" >
        <div className="title" >
          <h2>{pictures.title}</h2>
        </div>
      </Describe>
    </MainCard>
  );

}

const Describe = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
/* align-items: center; */
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  overflow: hidden;
  
  .title{
    transform: translateY(20px);
    backdrop-filter: blur(10px);
    padding-bottom: 20px;
    color: white;
  }
  
  :hover{
    transform: translateY(-20px);
    opacity: 1;
    transition: 0.5s;
  }

  `;



export default PictureToDisplay;
