import axios from "axios";
import config from "config";

export function addTask(todo) {
  axios
    .post(`${config.apiUrl}/todos/add`, todo)
    .then((res) => console.log(res.data));
}
