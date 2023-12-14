import User from "./database/models/user";
import Todo from "./database/models/todos";
import { Router } from "express";

const todoRoute = Router();

todoRoute.get("/all", async (req, res) => {
  try{
    res.send(await Todo.findAll({
      include: [{model: User, as: "user"}]
    }))
  }catch(err){
    console.error(err);
    res.status(500).send("Unexpected error occurred on server!");
  }
})

export default todoRoute;

