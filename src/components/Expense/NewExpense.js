import React from "react";
import './NewExpense.css';
import FormExpe from './FormExpense.js'
const NewExpe = (propse) =>{
    const saveDataHandler = (enteredData) =>{
        const expenceData = {
            ...enteredData,
            id: Math.random().toString()
        };
        propse.onAddExpense(expenceData);
    };
    return(
 <div className="new-expense">
  <FormExpe onSaveExpenseData={saveDataHandler}/>
 </div>

    );
};

export default NewExpe;