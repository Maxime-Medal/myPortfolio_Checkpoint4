import axios from "axios";

const getPictures = (setVar) => {
  axios
    .get("http://localhost:5500/api/pictures")
    .then((res) => res.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err));
};

export default getPictures;

