const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("dbElRaton.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 30002;

server.use(middlewares);
server.use(router)

server.listen(port)
