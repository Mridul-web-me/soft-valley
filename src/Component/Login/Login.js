import { Button, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://crm.softvalley.sveducrm.com/api/admin/login', {
      method: 'POST',
      body: {
        email:  email,
      password: password
      }
    })

      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.idToken)
        console.log('Logged in!', data, data.idToken);
      });
      
  };



  return (
    <div>
        <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
         id="outlined-email-input"
         label="email"
         type="email"
         autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)}
          style={{margin: '10px 0'}}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="password"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <br />
        <Button style={{background: 'black',   margin: '10px',  color: '#fff'}} type="submit">Login</Button>
      </form>
    </div>
    </div>
  )
}

export default Login