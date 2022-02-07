import styled from "styled-components";
import instaLogo from "../img/tl(2).webp";
import faceBookLogo from "../img/tl(37).webp";
import love from "../img/tl(5).webp";

function Footer() {
  return (
    <Navbar>
      <div className="content">
        <div className="logoList">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            {" "}
            <img src={faceBookLogo} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/maxime_medal/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={instaLogo} alt="instagram" />
          </a>
        </div>
        <p>
          Développé avec <img src={love} alt="love" className="love" /> par
          Maxou de la{" "}
          <a href="https://www.wildcodeschool.com/fr-FR/campus/toulouse">
            Wild Code School
          </a>{" "}
        </p>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  background-color: black;
  /* height: 5rem; */
  padding: 1.8em;
  font-family: "Trebuchet MS";
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;

  .logoList {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap; /* justify-content: flex-start; */

    img {
      padding: 0 2em;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* align-items: center; */

    img {
      width: 40px;
      filter: invert(1);
    }

    .love {
      width: 1.2em;
      filter: invert(0);
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
    }

    a:visited,
    a,
    a[download] {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Footer;
