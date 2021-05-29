import React, { Component } from "react";
import { addTask } from "./../Util/APIUtil";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_desc: "",
      todo_resp: "",
      todo_prio: "",
      todo_comp: false,
    };
  }

  onChangeTodoDesc = (e) => {
    this.setState({ todo_desc: e.target.value });
  };

  onChangeTodoResp = (e) => {
    this.setState({ todo_resp: e.target.value });
  };

  onChangeTodoPrio = (e) => {
    this.setState({ todo_prio: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todo_desc: this.state.todo_desc,
      todo_resp: this.state.todo_resp,
      todo_prio: this.state.todo_prio,
      todo_comp: this.state.todo_comp,
    };

    addTask(newTodo);

    this.setState({
      todo_desc: "",
      todo_resp: "",
      todo_prio: "",
      todo_comp: false,
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_desc}
              onChange={this.onChangeTodoDesc}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_resp}
              onChange={this.onChangeTodoResp}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="prioOptions"
                id="prioLow"
                value="Low"
                checked={this.state.todo_prio === "Low"}
                onChange={this.onChangeTodoPrio}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="prioOptions"
                id="prioLow"
                value="Medium"
                checked={this.state.todo_prio === "Medium"}
                onChange={this.onChangeTodoPrio}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="prioOptions"
                id="prioLow"
                value="High"
                checked={this.state.todo_prio === "High"}
                onChange={this.onChangeTodoPrio}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
