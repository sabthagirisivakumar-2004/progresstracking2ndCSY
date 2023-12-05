import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate();
    const Next = () =>{
        navigate('/');
    }
    const Back= () =>{
        navigate('/signup');
    }
  return (
    <>
    <div>i am signin page</div>
    <button onClick={Back}>back</button>
    <button onClick={Next}>next</button>
    </>
  )
}

export default Signin