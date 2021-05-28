const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const PORT = 4000;
const CONNECTIONSTRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@earley-dev-cluster.thyjw.mongodb.net/Earley-DB?retryWrites=true&w=majority`;

let Todo = require("./todo.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(CONNECTIONSTRING, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MogoDB connection established");
});

todoRoutes.route("/").get((req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todo);
    }
  });
});

todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      res.status(500).send("Failed to add task");
    });
});

todoRoutes.route("/update/:id").put((req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.todo_desc = req.body.todo_desc;
      todo.todo_resp = req.body.todo_resp;
      todo.todo_prio = req.body.todo_prio;
      todo.todo_comp = req.body.todo_comp;

      todo
        .save()
        .then((todo) => {
          res.json("Todo Updated");
        })
        .catch((err) => {
          res.status(500).send("Failed to update task");
        });
    }
  });
});

app.use("/todos", todoRoutes);

app.listen(PORT, function () {
  console.log("server is now running on Port: " + PORT);
});
