import React, { useState } from 'react'

const State = () => {
    const [data,setData]=useState(0);
    const handle=()=>{
        setData(data+1);
    }
  return (
    <div>
    <h1>count:{data}</h1>
    <button onClick={handle}>+</button>
    </div>
  )
}

export default State