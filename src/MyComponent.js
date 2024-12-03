
import React,{Component} from 'react'
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
        };

    }
    componentDidMount() {
      fetch('./data.json')
      .then((data)=> 
        {return data.json})
      .then ((data)=>
    {
        this.setState({
            data
        })
    });
    }
  
    render() {
        const data=this.state
      return <div>
         <h1>Fetched Data</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>;
    }
  }

  export default MyComponent