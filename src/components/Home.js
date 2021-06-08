import React, { Component } from "react";
import coronatest from './img/coronatest.jpg';
import s from './img/s.webp';
import h1 from './img/h1.png';
import wh from './img/wh.jpg';
import co from './img/co.jpg';
import ConfirmedDisplay from './ConfirmedDisplay';
import RecoveredDisplay from './RecoveredDisplay';
import Deaths from './Deaths';
import axios from 'axios';


export default class Home extends Component
{

  constructor(props) {
    super(props);

    this.getdata = this.getdata.bind(this);
  }

  state = {
    confirmed: "loading",
    recovered: "loading",
    deaths: "loading",
  };

  componentDidMount()
  {
    this.getdata();
  }

  async getdata(){
    const result=await axios.get("https://coronavirus-19-api.herokuapp.com/all")
    this.setState({
        confirmed:result.data.cases,
        recovered:result.data.recovered,
        deaths: result.data.deaths
        
    })
}
    render()
    {
        return(
            <div>
                     <div class="container-fluid">

                       <div class="row">
                        <div class="col-sm-5" style={{color:"black"}}>
                         <h1>Get live data for better decisions in an uncertain time.</h1>
                         <h5>Stay up-to-date with valuable coronavirus (COVID-19) data summarized by confirmed cases,revovered cases,active cases and total no. of deaths.</h5>
                        </div>
                        <div class="col-sm-7">
                            <img src={coronatest} style={{width:"100%",height:"300px"}} alt="corona"/>
                        </div>
                       </div>

                       <div class="row">
                        <div class="col-sm-4">
                        <ConfirmedDisplay value={this.state.confirmed}/>
                        </div>
                        <div class="col-sm-4">
                        <RecoveredDisplay value={this.state.recovered} />
                        </div>
                        <div class="col-sm-4">
                        <Deaths value={this.state.deaths}/>
                        </div>
                       </div>
                       
                       <div class="row">
                        <div class="col-sm-3">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top" src={s} alt="*" />
                          <div class="card-body">
                          <p class="card-text">Social distancing is a practise of reducing close contact between people in order to reduce opportunities for disease transmmission. Keep a distance 1m away from others</p>
                          </div>
                          </div>
                        </div>

                        <div class="col-sm-3">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top" src={co} alt="*" />
                          <div class="card-body">
                          <p class="card-text">Cover your snezze with your sleeves or tissue and always cover your mouth and nose with mask while stepping out of the house in order to curb the spread of covid-19.</p>
                          </div>
                          </div>
                        </div>

                        <div class="col-sm-3">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top" src={wh} alt="*" />
                          <div class="card-body">
                          <p class="card-text">In general, both handwashing with soap and handsanitizer,are highly effective at killing most germs and pathogens.Wash your hands with soap or sanitizer</p>
                          </div>
                          </div>
                        </div>

                        <div class="col-sm-3">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top" src={h1} alt="*" />
                          <div class="card-body">
                          <p class="card-text">Staying at home reduces the chances of a person of getting infectious from this virus.Always stay at home</p>
                          </div>
                          </div>
                        </div>
                       </div>

                     </div>                    
            </div>
        )
    }
}