const { PrismaClient } = require('@prisma/client');
const picturesRouter = require('express').Router();
const bodyParser = require('body-parser')

picturesRouter.use(bodyParser.json());
picturesRouter.use(bodyParser.urlencoded({ extended: true }));

const { pictures } = new PrismaClient();

picturesRouter.get('/pictures', async (req, res) => {
  await pictures
    .findMany({
      include: {
        categories: true,
        materials: true,
      }
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving pictures from database ")
    })
})

module.exports = picturesRouter;
