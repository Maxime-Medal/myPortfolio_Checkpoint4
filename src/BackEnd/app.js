require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { setupRoutes } = require('./routes');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_CLIENT_URL,
    credentials: true,
  })
);

app.use(express.static('public'));


const { SERVER_PORT } = process.env;
setupRoutes(app);



// server setup
const server = app.listen(SERVER_PORT, () => {
  console.log(` 📢 Server running on port ${SERVER_PORT}`);
});