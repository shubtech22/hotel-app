import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
// import { ToastContainer, toast } from 'react-toastify';

import AuthService from "../services/auth.service";
// import Popup from "reactjs-popup";
import './register.css'
// import OtpInput from "react-otp-input";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole=this.onChangeRole.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      roles:[]
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeRole(e) {
    console.log("==e.target.value==", e.target.value);
   if(e.target.value!=='NA'){
    this.setState({
      roles: e.target.value,
      // roles: this.state.roles.concat(e.target.value)  
});
   }
   
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,this.state.roles
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  // onTrigger = () => {
  //   Axios.post("http://localhost:8001/api/test/sendingEmail",
  //     {
  //       'name': this.state.username,
  //       'to': this.state.email,
  //       'from': 'shubham.pol1998@gmail.com',
  //       'subject': 'Here is the OTP'
  //     }).then(
  //       response => {
  //         if (response.data.status) {
  //           this.setState({ ...this.state, otp: response.data.otp })
  //         }
  //         else { }
  //       },
  //       error => {
  //         const resMessage =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString();

  //         this.setState({
  //           successful: false,
  //           message: resMessage
  //         });
  //       }
  //     );


  // }

  handleOtpChange = event => {
    this.setState({ ...this.state, otpInput: event })
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container" style={{background:"black",borderRadius:"25px"}}>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username" style={{color:"white"}}>Username:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" style={{color:"white"}}>Email:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" style={{color:"white"}}>Password:</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                {/* <div className="form-group">
                <label htmlFor="role" style={{color:"white"}}>Choose a Role:</label>
                    <select  name="role" id="role"  value={this.state.roles}  onChange={this.onChangeRole}  validations={[required]}>
                    <option value="NA">Select Role</option>
                         <option value="ROLE_ADMIN">ADMIN</option>
                         <option value="ROLE_MODERATOR">MANAGER</option>
                         <option value="ROLE_RECEPTIONIST">RECEPTIONIST</option>
                    </select>
                </div> */}
                <br></br>

                <center><div className="form-group">
                  <button className="btn btn-light btn-block">Sign Up</button>
                </div></center>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}