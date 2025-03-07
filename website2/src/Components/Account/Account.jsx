import React, { useState } from 'react'

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmite = (e) =>{
    e.preventDefault();
    
    if(!username || !email || !password) {
      setError("All fields are required!");
    }
    else {
      setError("");
      alert('Login successfully!');
      setUsername('');
      setPassword('');
      setEmail('');
    }
  };
  return (
    <div id='account'>
      <form onSubmit={handleSubmite}>
      <h2 id='login'>Login</h2>
        <div id='user'>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div id='email'>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div id='password'>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p id= 'error' >{ error }</p>}

        <div className="btn">
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Account
