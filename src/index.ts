import todoRoute from "./todo.api";
import { PORT } from "./configs";
import Express from "express";

const server = Express();

server.use(Express.json());
server.use(Express.text());
server.use(Express.urlencoded());


server.use("/todo", todoRoute)

const port = PORT || 80;
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`)
})
