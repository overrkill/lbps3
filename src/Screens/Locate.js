import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Locate.css';
import Map from '../Components/map';
import BackButton from '../Components/BackButton';

export default class Locate extends Component {
    constructor(props){
        super(props)
        this.state={
            lat:0,
            long:0,
            query:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleQuery=this.handleQuery.bind(this);
        
    }
    componentWillMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState(
                {
                    lat:position.coords.latitude, 
                    long:position.coords.longitude
                }
                );
          })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleQuery(){
        this.props.query(this.state.query);
    }
    render() {
        return (
            <div className="Locate">
                <div className="TextLocate">
                    <div>
                    {
                    ` is ${this.state.lat}  ${this.state.long}`
                    }
                    </div>
                    <div>
                        <input type="text" name='query' onChange={this.handleChange} />
                        <Link to='/Parking'><button onClick={this.handleQuery}>search</button></Link>
                    </div>
                </div>
                <div className="Map">
                    <Map google={this.props.google}
                         center={{lat: 18.5204, lng: 73.8567}}
                         zoom={15} />
     </div>
                <div className="Proceed">
                    <Link to='/Parking'><button>go ahead</button></Link>
                    <BackButton/>
                </div>
            </div>
        )
    }
}
