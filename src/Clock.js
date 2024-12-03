import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      timerId: null, //		<-- CREATE NEW PROPERTY
      timer: 0, //		<-- CREATE NEW PROPERTY
    };
    console.log("IN CONSTRUCTOR");
  }

  //  CREATE A METHOD TO UPDATE THE TIMER IN THE `state`

  updateTimer = () => {
    //		<-- CREATE A NEW METHOD
    this.setState({ timer: this.state.timer + 1 });
  };

  //  UPDATE THE CODE IN THE componentDidMount()

  componentDidMount() {
    console.log('IN "COMPONENT DID MOUNT"');

    const timerId = setInterval(this.updateTimer, 1000); // <-- CREATE AN INTERVAL
    this.setState({ year: this.props.currentYear, timerId }); // <-- SET timerId
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('IN "COMPONENT DID UPDATE"');

    if (prevProps.currentTime !== this.props.currentTime) {
      console.log("   RECEIVED NEW PROPS ! ! !");
    }
  }

  //  ADD THE LIFECYLCLE METHOD  `componentWillUnmount()`
  //  TO CLEAR THE TIMEOUT BEFORE THE COMPONENT IS DESTROYED

  componentWillUnmount() {
    // <-- ADD
    console.log('X  IN "COMPONENT WILL UNMOUNT"  X');
    clearTimeout(this.state.timerId); // <-- ADD
  }

  render() {
    console.log("IN RENDER");
    return (
      <div className="clock">
        <h1 className="head" style={{ padding: "5px" }}>
          Clock
        </h1>
        <h2 style={{ padding: "3px" }}>Year</h2>
        <p>{this.props.year}</p>
        <h2 style={{ color: "blue", alignItems: "center", border: "10" }}>
          Current Time
        </h2>
        <p>
          {this.props.currentTime ? this.props.currentTime : "Loading....."}
        </p>
        <h2>Timer: {this.state.timer} </h2> {/*    <--  ADD       */}
      </div>
    );
  }
}

export default Clock;
