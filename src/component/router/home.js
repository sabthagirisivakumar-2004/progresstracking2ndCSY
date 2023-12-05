import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const Back = () =>{
      navigate('/signin');
    }
    const Next = () =>{
      navigate('/contact');
    }
  return (
    <>
    <div> i am home page</div>
    <button onClick={Back}>back</button>
    <button onClick={Next}>next</button>
    </>
  )
}

export default Home