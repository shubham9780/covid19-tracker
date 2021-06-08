
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import India from './components/India';
import World from './components/World';
import Faq from './components/Faq';
import Form from './components/Form';
import Footer from './components/Footer';
import ScrollUpButton from 'react-scroll-up-button';

function App() {
  return (
    <div className="App">
      <Fragment>
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/india" component={India}/>
        <Route exact path="/world" component={World}/>
        <Route exact path="/faq" component={Faq}/>
        <Route exact path="/form" component={Form}/>
        </Switch>
        <Footer/>
        <ScrollUpButton/>
      </Router>
      </Fragment>
    </div>
  );
}

export default App;
