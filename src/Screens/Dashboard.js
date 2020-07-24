import React, { Component } from 'react';
import {db} from '../firebase';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import app from '../firebase';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
                vehicleno:'',
                vehicletype:'',
                parkedAt:'',
        };
        this.handleChange=this.handleChange.bind(this);
        this.updateDetails=this.updateDetails.bind(this);
        this.leaveParking=this.leaveParking.bind(this);
    }
    componentDidMount(){
        db.collection('users').doc(this.props.user.uid).onSnapshot(
            (d)=>{
                    let data=d.data();
                    this.setState({
                        data,
                        parkedAt:data.parkedAt
                    })
            }
        );
        
    }
    handleChange(e){
        this.setState(
            { [e.target.name] : e.target.value}
        )
    }
    updateDetails(){
        db.collection('users').doc(this.props.user.uid).update(
            {
                vehicleno:this.state.vehicleno,
                vehicletype:this.state.vehicletype
            }
            ).then(
                ()=>{console.log('im happy updated')}
            );
    }
    leaveParking(){
        db.collection('users').doc(this.props.user.uid).update(
            {
                parkedAt:''
            }).then(
                ()=>{console.log('leftparking')}
            )
    }
    render() {
        return (
            <div className='Dashboard'>
                <div className="calltoaction">
                    {
                        this.state.parkedAt
                        ?<div className='calltoaction' > <div>your vehicle is parked at <br/> {this.state.parkedAt} </div> <div> <button onClick={this.leaveParking} className='leaveButton' >leave parking</button> </div></div>
                        :<div>book a parking <br/> <Link to='/Locate'><button>  book  </button></Link> </div>
                    }
                    </div>
                <div className="details">
                    <div className="current">
        <div>vehicle number {this.state.data?this.state.data.vehicleno.toUpperCase():""}</div>
                        <div>vehicle type {this.state.data?this.state.data.vehicletype:""}</div>
                    </div>
                    <div className="update">
                        <div>update vehicle details</div>
                        <input type="text" placeholder='vehicle number' name='vehicleno' onChange={this.handleChange}/>
                        <input type="text" placeholder='vehicle type'name='vehicletype'onChange={this.handleChange}/>
                        <button onClick={this.updateDetails}>update</button>
                    </div>
                </div>

            </div>
        )
    }
}
