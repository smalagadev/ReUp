import React, { Component } from 'react';

class Dashboard extends Component {

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">SchedCheck</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Calendar</a></li>
            <li><a href="badges.html">Request Time Off</a></li>
            <li><a href="collapsible.html">Change Availability</a></li>
            <li><a href="sass.html">Info</a></li>
            <li><a href="collapsible.html">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
