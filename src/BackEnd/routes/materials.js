const { PrismaClient } = require('@prisma/client');
const materialsRouter = require('express').Router();
const bodyParser = require('body-parser')

materialsRouter.use(bodyParser.json());

const { materials } = new PrismaClient();

materialsRouter.get('/materials', async (req, res) => {
  await materials
    .findMany({
      include: {
        pictures: true,
      }
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving materials from database ")
    })
})

module.exports = materialsRouter;
