const todosController = require('../controllers').todos;

let store = {}
let id = 1;
module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send([
    store[req.id]
  ]));

  app.post('/', (req, res) => {
    console.log(`req.body: ${req.body.title}`)
    store[id] = req.body
    id += 1;
    res.send({id: id, store[id]})
  });
  app.delete('/', (req, res) => {res.send({
    
    })
  });
};