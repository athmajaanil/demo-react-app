import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0, // Track the elapsed time in seconds
    };
    this.intervalId = null; // Store the interval ID for cleanup
  }

  // componentDidMount() is called once when the component is mounted to the DOM
  componentDidMount() {
    console.log("Timer started");

    // Start the interval to update the state every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  // componentDidUpdate() is called whenever the component's state or props change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log(`Timer updated: ${this.state.seconds} seconds`);
    }
  }

  // componentWillUnmount() is called right before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Timer stopped");

    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>Elapsed Time: {this.state.seconds} seconds</p>
      </div>
    );
  }
}

export default Timer;
