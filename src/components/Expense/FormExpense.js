import React, {useState} from "react";

import './FormExpense.css';


    const FormExpe = (props) => {
        // const [enteredTitle, setEnteredTitle] = useState('');
        // const [enteredAmount, setEnteredAmout] = useState('');
        // const [enteredDate, setEnteredDate] = useState('');

        const [enteredTitle , setEnteredTitle] = useState('');
        const [enteredAmount , setEnteredAmount] = useState('');
        const [enteredDate , setEnteredDate] = useState('');
        

        const TitleChangehandler = (event) =>{
            setEnteredTitle(event.target.value);
            

        };
        const AmountChangehandler = (event) =>{
         setEnteredAmount(event.target.value);
        

        };

        const DateChangehandler =(event) =>{
         setEnteredDate(event.target.value);


        };

    // const [userInput , SetUserInput] = useState({
    //     NewTitle: '',
    //     NewAmount: '',
    //     Newdate: '',

    // });

    // const TitleChangehandler = (event) =>{
    //     setEnteredTitle(event.target.value);
    //     // SetUserInput({
    //     //     ...userInput,
    //     //   NewTitle: event.target.value,
    //     // })
    

    // };
    // const AmountChangehandler = (event) =>{
        
    //     setEnteredAmout(event.target.value);
    //     // SetUserInput({
    //     //     ...userInput,
    //     //   NewAmount: event.target.value,
    //     // })

    
    // };
    // const DateChangehandler = (event) =>{
    //     setEnteredDate(event.target.value);
    

    
    //     // SetUserInput({
    //     //     ...userInput,
    //     //   Newdate: event.target.value,
    //     // })
    

    // };
    
    
    

        const onSubmitHandler = (event) => {
            event.preventDefault();
             const expenceData = {
                title : enteredTitle, 
                amount: enteredAmount,
                date: new Date (enteredDate)
              };
              props.onSaveExpenseData(expenceData);
                setEnteredTitle('');
                setEnteredAmount('');
                setEnteredDate('');
        };
        
          
      
    return(
        <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                 <input  type="text" value={enteredTitle} onChange={TitleChangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                 <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                 <input type="date" min="2001-1-1" max="2022-3-03" value={enteredDate} onChange={DateChangehandler}/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit">Add</button>
        </div>
        </form>

    );


  };

export default FormExpe;