import HomeScreen from './components/HomeScreen/HomeScreen';
import Login from './components/Login/Login';
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

        </Switch>
      </Router>
    </>
  );
}

export default App;
