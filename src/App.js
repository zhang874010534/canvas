import './App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
