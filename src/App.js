import React, { Component } from 'react';
import Login from './Login';
import Home from "./Home";
import Menubar from "./MenuNavbar/Menubar";
import './Pages/NewitemsForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Home.css';
import './App.css';
import Main from './Pages/Main';
import Products from './Pages/Products';
import Reports from './Pages/Reports';
import NewitemsForm from './Pages/NewitemsForm';

function App() {
  return (
    <>
    <Router>
      <Menubar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/Products' component={Products} />
        <Route path='/Reports' component={Reports} />
        <Route path='/NewitemsForm' component={NewitemsForm} />

      </Switch>
    </Router>
    </>
  );
}



/* class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Menubar" component={Menubar} />

      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }
} */

export default App;
