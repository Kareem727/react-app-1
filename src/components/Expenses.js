import React from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses =(props) => {

   const [FilteredYear, setFilterYear] = useState('');

    const FIlterChangeHandler = selectedYear =>{
        setFilterYear(selectedYear); 
    };
const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === FilteredYear;
});
    



  return(
    
<div className="expenses">
         <ExpensesFilter selected= {FilteredYear} onChangeFilter={FIlterChangeHandler} />
         <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
       


 {/* <Expp
 title = {propse.items[0].title}
 amount = {propse.items[0].amount}
 date = {propse.items[0].date}
 />

 <Expp
 title = {propse.items[1].title}
 amount = {propse.items[1].amount}
 date = {propse.items[1].date}
 />

 <Expp
 title = {propse.items[2].title}
 amount = {propse.items[2].amount}
 date = {propse.items[2].date}
 />

 <Expp
 title = {propse.items[3].title}
 amount = {propse.items[3].amount}
 date = {propse.items[3].date}
 /> */}
    </div>
  
     
  
  
  );
}

export default Expenses;
