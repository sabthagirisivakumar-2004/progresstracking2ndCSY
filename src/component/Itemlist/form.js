import React, { useState } from 'react'

const Form = () => {
    const [mail,setMail]=useState(null);
    const[password,setPassword]=useState(null);
    const[Active,setActive]=useState(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z0-9_@./#&+-]{8,15}$/;
    const handleClick = (e)=>{
      if(mail === ''){
  alert('email is required');
      }
      if(password === ''){
  alert("password is required");
      }
        if(!emailRegex.test(mail)){
            alert("invalid email");
        }
        else if(!passwordRegex.test(password)){
           alert("invalid password");
        }
        else {
        setActive(false);
            alert("Login successfully");
        }

    } 
  return (
    <>
    {Active?
    <form onSubmit={handleClick}>
    <label>email:<input type='email' value={mail} onChange={(e)=>{setMail(e.target.value)}}></input></label><br></br>
    <label>password:<input type='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}></input></label>
    <button >submit</button>
    </form>:<h1>Successfully logged in</h1>
    }
    </>
  );
}

export default Form