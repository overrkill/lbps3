import React ,{ Component } from 'react';
import './Parking.css';
import ParkItem from '../Components/ParkItem';
import {db} from '../firebase';
/*const parkingList = [
    {
        name:'Sangvi',
        area:'Old Sangvi Pune',
        Available:97,
        map:''
    },
    {
        name:'Pmpiri',
        area:'Pimpri Pune',
        Available:47,
        map:''
    },
    {
        name:'Dp Road',
        area:'Aundh Pune',
        Available:12,
        map:''
    },
    {
        name:'Bopodi',
        area:'Bopodi Pune',
        Available:45,
        map:''
    },
    {
        name:'Khadki',
        area:'kirkee Pune',
        Available:76,
        map:''
    },
    {
        name:'Sangvi',
        area:'Old Sangvi Pune',
        Available:33,
        map:''
    },
    {
        name:'Shivajinagar',
        area:'Shivajinagar Pune',
        Available:200,
        map:''
    },
    {
        name:'Timbuktu',
        area:'unknown',
        Available:77,
        map:''
    },
    {
        name:'no location',
        area:'er4o4',
        Available:404,
        map:''
    }
];*/



   
export default class Parking extends Component {

    constructor(props){
        super(props);
        this.state={
            parkings:[],
        }
    }

    componentDidMount(){
        db.collection('parkings').where('name','==',this.props.query).get().then(
            (all)=>{
                let parkings=[];
                all.forEach(
                    (doc)=>{
                        parkings.push(doc.data());
                    }
                );
                this.setState({
                    parkings
                })
            }
        );
        console.log(this.state.parkings);
    }
    render() {
        return (
         
                <div className="Parking" >
                <div>{this.props.query}</div>
           {this.state.parkings.map((item,idx)=>{return <ParkItem key={idx} {...item} />})}
        </div>
         
        )
    }
}
