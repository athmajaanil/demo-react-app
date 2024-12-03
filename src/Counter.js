import React,{Component} from 'react'
class Counter extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }
increment=()=>{


    this.setState((prev)=>({count:prev.count+1}));

   
};
   
    render()
    {
        return(
            <div>
               <p>count : {this.state.count}</p>
               <button onClick={this.increment}>counter</button>
               
            </div>
        );
    }

}
export default Counter
