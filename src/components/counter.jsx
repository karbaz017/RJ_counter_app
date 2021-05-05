import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col1">
          <span>{this.formatCounter()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value == 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.key)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  formatCounter() {
    return this.props.counter.value == 0 ? "zero" : this.props.counter.value;
  }
}

export default Counter;
