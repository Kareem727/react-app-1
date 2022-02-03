import React from 'react';
import Expp from './Co1';
import './ExpensesList.css'
const ExpensesList = (props) => {


    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback '> No Data Found</h2>
    }

  return(
      <ul className='expenses-list'>

          { props.items.map((expense) =>(
            <Expp  
             
                    key= {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date} />
                ))
                                           }
      </ul>
  );
}

export default ExpensesList;
