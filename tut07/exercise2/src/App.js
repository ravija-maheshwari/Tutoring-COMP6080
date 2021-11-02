import React, { useState, useEffect } from 'react';
import './App.css';

let updateTimeout = null;

function App() {

  const [org, setOrg] = useState('microsoft'); //For the fetch call
  const [orgText, setOrgText] = useState('microsoft'); //To dispaly to the user

  const [numRepos, setNumRepos] = useState(0); 

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}`)
    .then(d => d.json())
    .then(d => {
      console.log(d.public_repos) //4416
      setNumRepos(d.public_repos)
    });
  }, [org]);

  const updateOrg = (e) => {
    setOrgText(e.target.value);
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      setOrg(e.target.value);
    }, 500)
  }
 
  return (
    <div style={{ margin: '50px'}}>
      <input disabled={true} type="text" value={numRepos} />
      <button type="button" onClick={() => setNumRepos(numRepos - 1)}>&minus;</button>
      <button type="button" onClick={() => setNumRepos(numRepos + 1)}>&#43;</button>
      <input disabled={false} type="text" value={orgText} onChange={updateOrg}/> 
    </div>
  );
}

export default App;
