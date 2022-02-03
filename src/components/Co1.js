import React, {useState} from 'react';
import './Co1.css'
import Co1Dateee from './Co1Date'
const Expp = (propse)=>{

    const [title, setTitle] = useState(propse.title);
console.log("sfdSfs fs fs f");

const handler = () =>{
    console.log(title);
    setTitle('Updated');
}
    return(
    <div className='expense-item'>
        <Co1Dateee date={propse.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{propse.amount}</div>
            <button onClick={handler}>click</button>
        </div>
    </div>
    );
    
}

export default Expp;