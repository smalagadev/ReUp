import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Dashboard from './components/Dashboard';
import Calendar from './pages/Calendar';
import ChangeAvailability from './pages/ChangeAvailability';
import RequestTimeOff from './pages/RequestTimeOff';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Switch>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/Calendar' component={Calendar}/>
          <Route exact path='/RequestTimeOff' component={RequestTimeOff}/>
          <Route exact path='/ChangeAvailability' component={ChangeAvailability}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
