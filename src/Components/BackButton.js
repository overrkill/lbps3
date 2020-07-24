import React from 'react';
import { useHistory } from 'react-router';

export default function BackButton(props) {
    let history=useHistory();
    const goBack=()=>{
        history.goBack();
    }
    return (
        <div>
            <button className='goback' onClick={goBack}>back</button>
        </div>
    )
}
