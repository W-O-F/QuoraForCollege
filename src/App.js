import HomeScreen from './components/HomeScreen/HomeScreen';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path="/" exact>
            <HomeScreen />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Signup">
            <Signup />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
