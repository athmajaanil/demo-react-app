import React, { Component } from "react";

class componentDidUpdateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      prevCount: null, // To track the previous value
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    // Only update `prevCount` when the `count` value changes
    if (prevState.count !== this.state.count) {
      this.setState({ prevCount: prevState.count });
      console.log(`Count updated: Previous(${prevState.count}), Current(${this.state.count})`);
    }
  }

  render() {
    const { count, prevCount } = this.state;

    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCount !== null ? prevCount : "N/A"}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default componentDidUpdateDemo;
