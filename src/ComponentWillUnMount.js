
import React,{Component} from 'react'
class componentWillUnmount extends React.Component {
    componentDidMount() {
      this.intervalId = setInterval(this.updateData, 10); // Set up a repeating task
    }
  
    componentWillUnmount() {
      // Clean up by clearing the interval
      clearInterval(this.intervalId);
    }
  
    updateData = () => {
      console.log("Updating data...");
    };
  
    render() {
      return <div>Component with repeating task.</div>;
    }
  }

  export default componentWillUnmount