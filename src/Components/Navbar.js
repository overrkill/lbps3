import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logolbps.svg'
export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar" >
                <div className='header'> 
                <img src={logo} width="25px" height='50px' alt="logo" /> 
                <div>lbps</div> 
                </div>
                {this.props.user ? <div className="Navmenu"> <div >hey, {this.props.user}</div> </div> : <div className="Navmenu"> <Link to='/'><div className="Navlinks">Login</div></Link> 
                <Link to='/Register'><div className="Navlinks">Register</div></Link></div>}
            </div>
        )
    }
}
