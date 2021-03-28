import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	validate = () => {
        const ValidationFields = ['password', 'email'];
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
		const isValid = this.validate();

		if(isValid) {
			console.log('You are logged in');
			console.log(this.state);
			// this.setState({
			// 	email: '',
			// 	password: ''
			// });
			this.props.history.push('/welcome/' + this.state.email);
		}
		else {
			alert('Data Not Validated');
		}
	}

	render() {
		return (
			<div className="login">
				<center>
					<div className="div1">
						<div className="div2">
							<form onSubmit={this.displayLogin}>

								<h1 style={{ fontSize: 35 }}>Login</h1>
								<label className="lb1"><b>Username</b></label>
								<div className="username">
									<input
										type="text"
										placeholder="Username..."
										value={this.state.email}
										onChange={this.update}
										name="email"
									/>
									<div id='email-validation'>{this.state.validationMsg}</div>
								</div>

								<label className="lb1"><b>Password</b></label>
								<div className="password">
									<input
										type="password"
										placeholder="Password..."
										value={this.state.password}
										onChange={this.update}
										name="password"
									/>
									<div id='password-validation'>{this.state.validationMsg}</div>
								</div>

								<input type="submit" className="registerbtn" value="Login" />

							</form>
						         <p>Don't have an account? <Link to="/register">SignUp</Link>.</p>
						</div></div>
				</center>
			</div>
		);
	}
}

export default Auth;