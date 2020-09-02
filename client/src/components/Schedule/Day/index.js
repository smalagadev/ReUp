import React, { Component } from "react";

class Day extends Component {

  render(){
    
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
                      'Friday', 'Saturday', 'Sunday'];

    return (
      <>
        <h3>{daysOfTheWeek}</h3>
      </>
    );
  }
}

export default Day;
