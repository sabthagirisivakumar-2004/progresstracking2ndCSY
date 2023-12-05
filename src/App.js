import React, { useState } from 'react';
import  Success  from './success';
import './App.css';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show , setShow] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z0-9_@./#&+-]{8,15}$/;
  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
    } else if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters');
    } else {
      setError('');
      // Perform login logic here
      alert('Login successful');
      setShow(false);
      

    }
  };

  return (
    <>
    {show ? 
    (<div className='box'>
      <div className='name'>
        <form>
          <label className='l1'>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label  className='l2'>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p className='error'>{error}</p>    
          <button className='btn' onClick={handleLogin}>
           Login
          </button>
        </form>
      </div>
    </div>) : 
      (<Success />)
    }
    </>
    
  );
};

export default App;
