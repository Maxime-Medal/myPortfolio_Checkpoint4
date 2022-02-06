const { PrismaClient } = require('@prisma/client');
const categoriesRouter = require('express').Router();
const bodyParser = require('body-parser')

categoriesRouter.use(bodyParser.json());
categoriesRouter.use(bodyParser.urlencoded({ extended: true }));

const { categories } = new PrismaClient();

categoriesRouter.get('/categories', async (req, res) => {
  await categories
    .findMany()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving categories from database ")
    })
})


module.exports = categoriesRouter;
