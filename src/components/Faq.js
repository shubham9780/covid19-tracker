import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
export default class Faq extends Component
{
    constructor(props) {
        super(props);
    
        this.getdata = this.getdata.bind(this);
      }

      state = {
        Data:[]
      };

      renderdata(){
        return this.state.Data.map((data,i) =>{
                  return <div class="card1">
                  <div class="info1">
                      <strong>{data.Question}</strong><hr/>
                      <p>{data.Answer}</p>
                  </div>
              </div>
        });
      }

      async getdata(){
        const result=await axios.get("https://covid19-tracker123.herokuapp.com/form/");
        
        this.setState({
            Data:result.data
          })
    }
    
    componentDidMount()
    {
      this.getdata();
    }

    render()
    {
        return(
            <div>
            <div className="container-fluid" style={{marginTop:"20px"}}>
                    <h5>Add a new Question with answer</h5>
                <button type="button" className="btn btn-warning"><Link to="/form">Add New</Link></button>
                </div>
            <div className="container-fluid">
            {this.renderdata()}    
            </div>
            </div>
        )
    }
}