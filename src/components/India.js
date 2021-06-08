import React, { Component } from "react";
import ConfirmedDisplay from './ConfirmedDisplay';
import RecoveredDisplay from './RecoveredDisplay';
import Deaths from './Deaths';
import axios from 'axios';

export default class India extends Component
{

    constructor(props) {
        super(props);
    
        this.getdata = this.getdata.bind(this);
      }
      state = {
        confirmed: "Select a state",
        recovered: "Select a state",
        deaths: "Select a state",
        states:[]
      };

      componentDidMount()
      {
      this.getdata();
      }

      async getdata(){
        const result=await axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise");
        this.setState({
          states:result.data.data.statewise
        })
        }

        onSelect=(e)=>
        {
          const { states} = this.state;
        this.setState({
          confirmed:states[e.target.value].confirmed,
          recovered:states[e.target.value].recovered,
          deaths:states[e.target.value].deaths,
        })
        }

        renderOption()
        {
          let array = this.state.states.map((item, i) => {
            return <option key={i} value={i}>
              {item.state}
              </option>;
          });
          array.unshift(<option key={-1}>Search by state</option>);
          return array;
        }  

        gettable(){
          return this.state.states.map((item,i) =>{
                    return <tr key={i}>
                    <td className="td">{item.state}</td>
                  <td className="td">{item.confirmed}</td>
                  <td className="td">{item.active}</td>
                  <td className="td">{item.recovered}</td>
                  <td className="td">{item.deaths}</td>
                  </tr>
          });
        }

        rendersState(){
          return <table className="table">
          <thead>
          <tr className="tr">
          <th className="th" style={{backgroundColor:"lightGrey",fontSize:"2vw"}}>State</th>
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
                        <RecoveredDisplay value={this.state.recovered}/>
                        </div>
                        <div class="col-sm-4">
                        <Deaths value={this.state.deaths}/>
                        </div>
                    </div>

                    <div className="row">
                          <div className="col-sm-12">
                          {this.rendersState()}
                          </div>
                    </div>
            </div>
        )
    }
}