import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from '../src/Post';
import Home from '../src/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post /> 
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
