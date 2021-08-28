import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div
        className="mh-work-item dark-bg wow fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.4s"
      >
        <h4>
          {this.props.title} <a href="">{this.props.company}</a>
        </h4>
        <div className="mh-eduyear">
          {this.props.start} - {this.props.end}
        </div>
        <span>Responsibility :</span>
        <ul className="work-responsibility">
          {this.props.resps.map((resp, i) => (
            <li id={i}>
              <i className="fa fa-circle"></i>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
