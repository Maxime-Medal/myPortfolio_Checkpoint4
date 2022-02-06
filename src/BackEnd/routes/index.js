const categoriesRouter = require('./categories');
const materialsRouter = require('./materials');
const picturesRouter = require('./pictures');

const setupRoutes = (app) => {
  app.use('/api/', picturesRouter)
  app.use('/api/', materialsRouter)
  app.use('/api/', categoriesRouter)
}



module.exports = { setupRoutes };