import React, { Component } from "react";


var date=new Date().toLocaleDateString();

export default class ConfirmedDisplay extends Component {

  
  render() {
    return (
      <div className="box confirmed">
        <h4 style={{fontWeight:"545"}}>Confirmed cases</h4>
        <h4 style={{fontWeight:"bold"}}>{this.props.value}</h4>
        <h4 style={{fontWeight:"545"}}>{date}</h4>
        <h4 style={{fontSize:"15px",fontWeight:"bold"}}>Number of confirmed cases of COVID-19</h4>
      </div>
    );
  }
}
