const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API on root url /',
  }));

  app.post('/', todosController.create);
  app.delete('/', (req, res) => res.send({}));
};