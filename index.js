const jsonServer = require("json-server"); // importing the json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; 

server.use(middlewares);
server.use(router);

server.listen(port);