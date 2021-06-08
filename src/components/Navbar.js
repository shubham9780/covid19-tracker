import React, { Component } from "react";
import { Link } from "react-router-dom";
import c from './img/c.png';

export default class Navbar extends Component{
    render(){
        return(
            <div className="container-fluid">
                 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <Link to="/" class="navbar-brand" >
                      <h5>CORONA-TRACKER<img src={c} style={{width:"10%"}} alt="*"/></h5>
                </Link>
                  
                     <div >
                      <ul class="navbar-nav justify-content-right">
                         <li class="nav-item active">
                             <Link  className="nav-link" to="/india" >India<span className="sr-only">(current)</span></Link>
                         </li>
                         <li class="nav-item">
                             <Link to="/world" className="nav-link" >World</Link>
                         </li>
                         <li class="nav-item">
                             <Link to="/faq" className="nav-link" >FAQ</Link>
                         </li>
                      </ul>
                     </div>
                   </nav>
            </div>
        )
    }
}