import React,{useState} from 'react'

function CounterHook()
{
    const [num,setNum]=useState(100)
    const increment=()=>{
        setNum(num+1);
        };
     return(
        <div>
            num: {num}
            <button onClick={increment}>Incremetn Num</button>
        </div>
     )
    }


export default CounterHook