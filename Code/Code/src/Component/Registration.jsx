import React, { Component } from 'react';
import './Style.css'
import {Link} from 'react-router-dom';

const intialState = {
    name: '',
    email: '',
    password: '',
    nameValidationMsg: '',
    passwordValidationMsg: '',
    validationMsg: ''
}
class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = intialState;
        this.update = this.update.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
    }

    update(e) {
        let name = e.target.name;
        let value = e.target.value;
        document.getElementById(`${name}-validation`).innerHTML = '';
        this.setState({
            [name]: value
        });
    }

    validate = () => {
        const ValidationFields = ['name', 'password', 'email'];
        for (var field of ValidationFields) {
            console.log(field, ' : ', this.state[field]);
            if (!this.state[field]) {
                document.getElementById(`${field}-validation`).innerHTML = 'Please Validate ' + field;
                return false;
            }
            if (field === 'email') {
                const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if (emailRegExp.test(this.state[field])) return true;
                else {
                    document.getElementById(`email-validation`).innerHTML = 'Please Validate email';
                    return false;
                }
            }
        }
        return true;
    };

    displayLogin(e) {
        e.preventDefault();
        const isvalid = this.validate();

        if (isvalid) {
            console.log(this.state);
            this.props.history.push('/welcome/' + this.state.name);
        } else {
            alert('Please Validate form');
        }
    }

    render() {
        return (
            <div className="container">

                <form onSubmit={this.displayLogin}>

                    <center>
                        <div className="div1">
                            <div className="div2">
                                <center> <h1 style={{ fontSize: 35 }}>Registration</h1> </center>
                                <label className="lb1"><b>Name</b></label>
                                <div className="name">

                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.update}
                                    />

                                    <div id='name-validation' >{this.state.nameValidationMsg}</div>
                                </div>

                                <label className="lb1"><b>Email</b></label>
                                <div className="email">

                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.update}
                                    />
                                    <div id='email-validation'>{this.state.validationMsg}</div>
                                </div>

                                <label className="lb"><b>Password</b></label>
                                <div className="pasword">

                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.update}
                                    />
                                    <div id='password-validation' style={{ fontSize: 12, color: "red" }}>{this.state.passwordValidationMsg}</div>
                                </div>


                                <input type="submit" class="registerbtn" value="Register" />
                                <p>Already have an account? <Link to="/">Sign In</Link>.</p>
                            </div>
                        </div>
                    </center>

                </form>
            </div>
        );
    }
}

export default Registration;