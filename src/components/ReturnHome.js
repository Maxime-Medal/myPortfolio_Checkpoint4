import styled from "styled-components";
import { Link } from "react-router-dom";

function ReturnHome() {
  return (
    <Link to="/">
      <Container className="myPict">
        <img src="http://localhost:5500/pictures/obj-50mm-7648.png" />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  /* top: 50;
  left: 50; */
  width: 150px;
  height: 150px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ReturnHome;
