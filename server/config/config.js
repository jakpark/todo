console.log(`process.env.SECRET_KEY: ${process.env.SECRET_KEY}`)

module.exports = {
  
  "username": "jake",
  "password": process.env.SECRET_KEY,
  "database": "todos_dev",
  "host": "127.0.0.1",
  "port": 5432,
  "dialect": "postgres"
  
};

console.log("config.js")