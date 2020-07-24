import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: '',

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    c
    handleClick() {
        console.log('handleclick');
        
        this.props.checkLoggedIn(this.state.name, this.state.pass);
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
                    <input type="text" placeholder='username' name='name' id="email" onChange={this.handleChange} />
                </div>
                <div className='input'>
                    <input type="password" placeholder='password'name='pass' id="pass" onChange={this.handleChange} />
                </div>
                
                <button onClick={this.handleClick}>Login</button>

            </div> 
        )
    }
}
