import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
    const Next = ()=>{
        navigate('/signin');
    }
  return (
    <>
    <div>i am signup page</div>
    <button onClick={Next}>next</button>
    </>
  )
}

export default Signup