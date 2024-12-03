import React,{useState} from 'react'
function CarHook(){

    const [nam,setNam]=useState("Maruti")
    const changeName=()=>
    {
        setNam(nam+"aa")

    };

    return(
        <div>
            <p> Name: {nam}</p>
            <button onClick={changeName}>change</button>
        </div>
        
    )


}

export default CarHook