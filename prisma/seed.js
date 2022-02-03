const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  console.log('start seeding 🌱');

  const categoriesData = await prisma.categories.createMany({
    data: [{
      name: "Macro-photographie",
    },
    {
      name: "Spéléologie",
    },
    {
      name: "Personnes",
    },
    {
      name: "Astronomie",
    },
    {
      name: "Nature",
    },
    ]

  })

  const materialsData = await prisma.materials.createMany({
    data: [{
      name: "Pentax K3",
      description: "Appareil photo reflex avec un capteur APCS",
      accessories: {
        flash: ["Yungnuo", "Pentax"],
        déclencheur: "Yungnuon RF-603",
        accessoire: "bague d'extension réalisé en impression 3D"
      }
    },
    {
      name: "Olympus TG4"
    },
    {
      name: "Iphone Xr"
    },
    ]

  })

  const picturesData = await prisma.pictures.createMany({
    data: [{
      title: "Araignée",
      link: "/pictures/Macro-4993.jpg",
      details: "Macro réalisé avec une bague d'extension ",
      shoot_date: new Date('2021-03-25'),
      categoriesId: 1,
      materialsId: 1,
    },
    {
      title: "Paquerette",
      link: "/pictures/Paquerette-4500.jpg",
      details: "Abeille noire butinant sur sa paquerette. Macro réalisé avec une bague d'extension ",
      shoot_date: new Date('2021-02-12'),
      categoriesId: 1,
      materialsId: 1,
    },
    {
      title: "Gouttes d'eau",
      link: "/pictures/Macro-4230.jpg",
      details: "Gouttes d'eau sur son herbe. Macro réalisé avec une bague d'extension ",
      shoot_date: new Date('2021-01-19'),
      categoriesId: 1,
      materialsId: 1,
    },
    {
      title: "Doline de la nauze",
      link: "/pictures/Doline_de_Nauze-4444.jpg",
      details: "lac éphémère suite aux pluies abondantes",
      shoot_date: new Date('2021-02-12'),
      categoriesId: 5,
      materialsId: 1,
    },
    {
      title: "Doline de la nauze",
      link: "/pictures/Doline_de_Nauze-5103.jpg",
      details: "lac éphémère suite aux pluies abondantes",
      shoot_date: new Date('2021-02-12'),
      categoriesId: 5,
      materialsId: 1,
    },
    {
      title: "Doline de la nauze",
      link: "/pictures/Doline_de_Nauze-4452.jpg",
      details: "lac éphémère suite aux pluies abondantes",
      shoot_date: new Date('2021-02-12'),
      categoriesId: 5,
      materialsId: 1,
    },
    {
      title: "Doline de la nauze",
      link: "/pictures/Doline_de_Nauze-4458.jpg",
      details: "lac éphémère suite aux pluies abondantes",
      shoot_date: new Date('2021-02-12'),
      categoriesId: 5,
      materialsId: 1,
    },
    {
      title: "Lac de Gaube",
      link: "/pictures/Lac_de_Gaube-.jpg",
      details: "lac de bla bla ",
      shoot_date: new Date('2021-04-09'),
      categoriesId: 5,
      materialsId: 1,
    },
    {
      title: "Une nuit à Cologne",
      link: "/pictures/Nuit_cologne-4554-2.jpg",
      details: "Un ciel étoilé avec Orion et le Perseïdes",
      shoot_date: new Date('2021-03-01'),
      categoriesId: 4,
      materialsId: 1,
    },
    {
      title: "À travers l'objectif",
      link: "/pictures/A_travers_50mm-7660.jpg",
      details: "youhou!!",
      shoot_date: new Date('2021-09-02'),
      categoriesId: 3,
      materialsId: 1,
    },
    ]
  })


  console.log({
    picturesData,
    categoriesData,
    materialsData,

  });



  console.log(`🎉 🎉  Seeding is finish! 🎉 🎉 `);

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
