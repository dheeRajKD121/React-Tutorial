import React from 'react'
import { useState } from 'react'

const Assignment = () => {
    const [data,setData]=useState(0)

    const handleDecrement=()=>{
       if(data>0){
        setData(data-1)
       }else{
        alert("sorry you can't select data less than one")
       }
    }

    const handleIncrement=()=>{
        if(data<10){
             setData(data+1)
        }else{
            alert("Sorry you cant't select data more than 10.")
        }
    }
     
  return (
    <>
    {/* <button onClick={()=>setData(data-1)}>-</button>
   { data}
    <button onClick={()=>setData(data+1)}>+</button> */}

    <button className='btn btn-danger mx-3' onClick={handleDecrement}>-</button>
   { data}
    <button className=" btn btn-primary mx-3" onClick={handleIncrement}>+</button>
    </>
  )
}

export default Assignment;