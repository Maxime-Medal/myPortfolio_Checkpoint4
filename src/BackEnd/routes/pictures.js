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

picturesRouter.get('/pictures/:id', async (req, res) => {
  const { id } = req.params;
  await pictures
    .findUnique({
      where: { id: parseInt(id) },
      include: {
        categories: true,
        materials: true,
      }
    })
    .then((pict) => {
      if (pict) res.status(200).json(pict);
      else res.status(404).send("picture not found");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving picture from database");
    })
})

picturesRouter.post('/pictures', async (req, res) => {
  const info = req.body;
  pictures
    .create({ data: { ...info } })
    .then((createdPicture) => {
      res.status(201).json(createdPicture);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the picture");
    });
});

picturesRouter.put('/pictures/:id', async (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  pictures.findUnique({ where: { id: parseInt(id, 10) } }).then((pict) => {
    if (pict) {
      pictures
        .update({ data: { ...updatedInfo }, where: { id: parseInt(id, 10) } })
        .then(() => {
          res.status(201).json({ ...updatedInfo });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error saving the picture");
        });
    } else {
      res.status(404).send("Error retrieving picture from database");
    }
  })
});

module.exports = picturesRouter;
