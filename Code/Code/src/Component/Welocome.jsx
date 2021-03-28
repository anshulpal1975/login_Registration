import React, { Component } from 'react'
import logo from './logo.jpg'; 

export default class Welocome extends Component {
    render() {
        console.log('name : ', this.props.match.params.name);
        return (
            <div>
               <center> <h1 style={{color:"blue" ,fontSize:50}}>Welcome {this.props.match.params.name}</h1> </center>
              
               <img src={logo} alt="Logo" /> 
            </div>
        )
    }
}
