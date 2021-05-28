const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_desc: {
    type: String,
  },
  todo_resp: {
    type: String,
  },
  todo_prio: {
    type: String,
  },
  todo_comp: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todo", Todo);
