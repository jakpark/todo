const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send([]));

  app.post('/', (req, res) => res.send({"title": "a todo"}));
  app.delete('/', (req, res) => res.send({}));
};