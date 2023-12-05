import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate=useNavigate();
    const Back = () =>{
    navigate('/');
    }
  return (
    <>
    <div>i am contact page</div>
    <button onClick={Back}>back</button>
    </>
  )
}

export default Contact