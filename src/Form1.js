import React,{useState} from 'react'
function Form1()
{

    const[inputs, setInputs]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const buttonClick=()=>{
        document.getElementById('display').innerHTML=`Name : ${inputs}`
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' value={inputs} onChange={(e)=>setInputs(e.target.value)}></input><br>
            </br>
            
            <button onClick={buttonClick}>Submit</button>
            <div id='display'>  
            </div>
            </form>
        </div>
    )

}
export default Form1;