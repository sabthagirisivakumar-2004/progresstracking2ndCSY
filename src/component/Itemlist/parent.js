import React from 'react'
import { useState } from 'react';
import Child from './child'
const Parent = () => {
    const [data,setDate]=useState('');
    const handle = (message) =>{
        setDate(message);
    }
  return (
    <>
    <h1>Parent component</h1>
    <p>component:{data}</p>
    <Child item={handle}/>
    </>
  )
}

export default Parent