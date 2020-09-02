import React, { Component } from "react";
import Day from "./Day";

class Schedule extends Component{
  render(){
    return(
      <>
        <h1>Your schedule</h1>
        <Day />
      </>
    );
  }
}

export default Schedule;
