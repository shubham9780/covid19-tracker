import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Footer extends Component
{
    render()
    {
        return(
            <div>
                      <footer className="footer">
                       <center>
                         <Link to="/" class="fa fa-facebook"></Link>
                         <Link to="/" class="fa fa-google"></Link>
                         <Link to="/" class="fa fa-linkedin"></Link>
                         <Link to="/" class="fa fa-youtube"></Link>
                         <Link to="/" class="fa fa-instagram"></Link>
                         <br></br>
                         <h4 style={{fontSize:"2vw",color:"white"}}>shubhamsoni9780@gmail.com</h4>
                         <br></br>
                         <h4 style={{fontSize:"2vw",color:"white"}}>Phone no.: 978041****</h4>
                         </center>
                      </footer>

                    
            </div>
        )
    }
}