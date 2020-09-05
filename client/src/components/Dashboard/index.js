import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Dashboard extends Component {

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">SchedCheck</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={"/Calendar"} activeClassName={"active"}>Calendar</Link></li>
            <li><Link to={"/RequestTimeOff"} activeClassName={"active"}>Request Time Off</Link></li>
            <li><Link to={"/ChangeAvailability"} activeClassName={"active"}>Change Availability</Link></li>
            <li><Link to={"/"}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
