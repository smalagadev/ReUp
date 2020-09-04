import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">SchedCheck</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={"/Calendar"}>Calendar</Link></li>
            <li><Link to={"/RequestTimeOff"}>Request Time Off</Link></li>
            <li><Link to={"/ChangeAvailability"}>Change Availability</Link></li>
            <li><Link to={"/"}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
