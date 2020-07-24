import React, { Component } from 'react';
import './ParkItem.css';

export default class ParkItem extends Component {
    render() {
        return (
            <div className='ParkingItem'> 
                <div className="title">{this.props.name}</div>
        <div className="location">{this.props.area}</div>
        <div className="available">{this.props.Available}</div>
                <div className='map'>map</div>
                <button class="bookbtn"> Book </button>
            </div>
        )
    }
}
