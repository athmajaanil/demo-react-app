import React, { Component } from "react";

class TimerMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0, // Initialize the time
    };
    this.intervalId = null; // This will hold the interval ID for cleanup
  }

  // Called once when the component is mounted to the DOM
  componentDidMount() {
    console.log("Timer started");

    // Start a timer that updates the state every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  // Called every time the component's state or props change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log(`Timer updated: ${this.state.seconds} seconds`);
    }
  }

  // Called right before the component is unmounted from the DOM
  componentWillUnmount() {
    console.log("Timer stopped");

    // Clean up the timer by clearing the interval when the component unmounts
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

export default TimerMessage;
