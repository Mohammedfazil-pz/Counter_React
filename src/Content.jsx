import React, { useState } from 'react'

function Content() {

  let [data,setData]=useState(0)

  const onIncrement=()=>{
    setData(data+1)
  }

  const onDecrement=()=>{
    if(data>0){
        setData(data-1)
    }
    
  }

  const onReset=()=>{
    setData(0)
  }


  return (
    <div>
      <h1 style={{textAlign:'center'}}>{data}</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <button onClick={onIncrement} style={{padding:"10px",backgroundColor:"dodgerblue",margin:'10px',color:'white',fontWeight:"bold",border:'1px solid lightgray'}}>Increment ++</button>
        <button onClick={onDecrement} style={{padding:"10px",backgroundColor:"red",margin:'10px',color:'white',fontWeight:"bold",border:'1px solid lightgray'}}>Decrement --</button>
        <button onClick={onReset} style={{padding:"10px",backgroundColor:"black",margin:'10px',color:'white',fontWeight:"bold",border:'1px solid lightgray'}}>Reset</button>
      </div>
    </div>
  )
}

export default Content
