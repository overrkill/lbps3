import React, { Component } from 'react';

import './Login.css';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            pass: '',
            vehicleno:'',
            vehicletype:''

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick() {
        console.log('registering a user');
        this.props.registerUser(this.state.name,this.state.vehicleno,this.state.vehicletype,this.state.email,this.state.pass);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="form" >
                 <div className='input'>
                    <input type="text" placeholder='name' name='name'  onChange={this.handleChange} />
                </div>
                <div className='input'>
                    <input type="text" placeholder='vehicle' name='vehicleno' onChange={this.handleChange} />
                </div>
                <div className='input'>
                    <input type="text" placeholder='vehicletype' name='vehicletype' onChange={this.handleChange} />
                </div>
                <div className='input'>
                    <input type="email" placeholder='email' name='email' id="email" onChange={this.handleChange} />
                </div>
                <div className='input'>
                    <input type="password" placeholder='password'name='pass' id="pass" onChange={this.handleChange} />
                </div>
                
                <button onClick={this.handleClick}>Register</button>

            </div>
        )
    }
}
