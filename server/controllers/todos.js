const Todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    res.send({"title": "a todo"})
  },
  delete(req, res) {
    res.send(200)
  },
};
console.log('todosController')