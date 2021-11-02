import './App.css';
import React, { useState } from 'react'

const BASE_URL = 'http://localhost:5005';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const submit = async (e) => {
      e.preventDefault();
      console.log(e);
      const response = await fetch(`${BASE_URL}/user/auth/register`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, 
          password,
          name,
        }),
        method: 'POST'
      });

      if(response.status === 200){
        setLoggedIn(true);
      }

      return false;
  };

  if(loggedIn) {
    return (
      <div> You're now logged in!</div>
    )
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input 
          type="text" 
          id='email' 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input type="text" id='name' placeholder="name"  onChange={(e) => setName(e.target.value)} />
        <input type="text" id='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Register"/>
      </form>
    </div>
  );
}

export default App;
