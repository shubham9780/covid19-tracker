import React, { Component } from "react";
import ConfirmedDisplay from './ConfirmedDisplay';
import RecoveredDisplay from './RecoveredDisplay';
import Deaths from './Deaths';
import axios from 'axios';

export default class World extends Component
{

    constructor(props) {
        super(props);
    
        this.getdata = this.getdata.bind(this);
      }
      state = {
        confirmed: "select a country",
        recovered: "select a country",
        deaths: "select a country",
        countries:[]
      };
        
    componentDidMount()
    {
    this.getdata();
    }

    async getdata(){
    const result=await axios.get("https://corona.lmao.ninja/v2/countries");
    this.setState({
      countries:result.data
    })
    }

    onSelect=(e)=>
    {
  const { countries} = this.state;
this.setState({
  confirmed:countries[e.target.value].cases,
  recovered:countries[e.target.value].recovered,
  deaths:countries[e.target.value].deaths,
    })
   }

     renderOption()
    {
  let array = this.state.countries.map((country, i) => {
    return <option key={i} value={i}>
      {country.country}
      </option>;
  });
  array.unshift(<option key={-1} >Search by country</option>);
  return array;
   }

   gettable(){
    return this.state.countries.map((country,i) =>{
              return <tr key={i}>
              <td className="td">{country.country}</td>
            <td className="td">{country.cases}</td>
            <td className="td">{country.active}</td>
            <td className="td">{country.recovered}</td>
            <td className="td">{country.deaths}</td>
            </tr>
    });
  }
  
  renderCountry(){
    return <table className="table">
      <thead>
      <tr className="tr">
      <th className="th" style={{backgroundColor:"lightGrey",fontSize:"2vw"}}>Country</th>
      <th className="th" style={{backgroundColor:"yellow",fontSize:"2vw"}}>Confirmed Cases</th>
      <th className="th" style={{backgroundColor:"Orange",fontSize:"2vw"}}>Active Cases</th>
      <th className="th" style={{backgroundColor:"Green",fontSize:"2vw"}}>Recovered Cases</th>
      <th className="th" style={{backgroundColor:"Red",fontSize:"2vw"}}>Total Deaths</th>
    </tr>
    </thead>
    <tbody>
    {this.gettable()}
      </tbody>
    </table>
  }

    render()
    {
        return(
            <div className="container-fluid">
                    <select onChange={this.onSelect} style={{width:"100%",marginTop:"10px"}}>{this.renderOption()}</select>
                    
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

                    <div className="row">
                          <div className="col-sm-12">
                          {this.renderCountry()}
                          </div>
                    </div>
                    
            </div>
        )
    }
}