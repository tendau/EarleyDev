import axios from "axios";

export function addTask(todo) {
  axios
    .post("http://localhost:4000/todos/add", todo)
    .then((res) => console.log(res.data));
}
