import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, // Initialize `data` as null
    };
  }

  componentDidMount() {
    
    fetch("./data.json") // Replace with your server URL
      .then((response) => response.json())
      .then((data) => this.setState({ data })); // Update `data` in state
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    return (
      <div>
        <h1>Fetched Data</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>id: {item.id} name:{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
