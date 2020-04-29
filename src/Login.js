import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

import axios from "axios";

import { PostData } from './services/PostData';
import Khaadi from './Khaadi';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateApi from './CreateApi';

import AdminUI from './AdminUI';

import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false

    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      this.props.history.push('/');
    }
  }
  login() {
    if (this.state.email && this.state.password) {
      PostData(this.state).then((result) => {

        let responseJson = result;
        console.log(responseJson);

        if (responseJson) {

          sessionStorage.setItem('userData', responseJson);
          this.setState({ redirect: true })
          console.log(responseJson);
          this.props.history.push('/');



        }
        else {
          console.log("login error");

        }

      });
    }

  }





  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  render() {
    console.log(sessionStorage);

    console.log('props in login -> ', this.props);



    // if(sessionStorage.getItem('userData')){

    //    return(

    //    );

    //    } 

    return (


     
      <div className="container-fluid" id = "abox">
         {/* headings */}
        <div className="container">
           <h1 className="display-4 para">ADMIN LOGIN FORM</h1> 
          <h1 className="display-4 para2">Welcome Admin, Login below to view records!</h1>
          <hr class="my-4" ></hr>
        </div>

{/* jumbotron */}
        <div className="jumbotron jumbotron-fluid" id = "center">
      <img src="adminlogo.png" alt="Avatar" className = "image"/>
          <hr className = "line"></hr>
          <div>
            <h1>Login</h1>
            <hr className = "line2" ></hr>
          </div>
  
  {/* form */}

          <div className = "container">
          <div className="form-group" id = "inp1">
          <i class="envelope icon big" id = "icn1"></i>
            <label>EMAIL</label>
          <input type="text" className="form-control" id = "field1" name="email" placeholder="Enter Email" onChange={this.onChange} />
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group" id = "inp2">
          <i class="lock icon big icn" id = "icn2"></i>
            <label>PASSWORD</label>
          
            <input type="password" className="form-control" id = "field2" name="password" placeholder="Enter Password" onChange={this.onChange} />
            <small className="form-text text-muted">We'll never share your password with anyone else.</small>
          </div>

     
          <hr className = "line"></hr>
          <button className="btn btn-primary"  id = "btn1" type="submit" value="Login" onClick={this.login}
          >Submit</button>
        <div className = "w-100"></div>
        <Link to="/mainpage"><button className="btn btn-primary" 
        id = "btn2"
        type="submit" value="Login" onClick={this.login}
          >Back</button></Link>

        </div>

          </div>
</div>


    );

  }
}

export default (Login);  