import logo from './logo.svg';
import Expp from './components/Co1'


import './App.css';
import NewExpe from './components/Expense/NewExpense.js';
import Expenses from './components/Expenses';
import { useState } from 'react/cjs/react.development';
const dummy_data = [
  {id: 'e1' ,title: 'BMW' , amount: '1d.2' , date: new Date(2021, 5 ,4)},
  {id: 'e2' ,title: 'Skoda' , amount: '1f2.2' , date: new Date(2021, 5 ,4)},
  {id: 'e3' ,title: 'Honda' , amount: '12fd.2' , date: new Date(2021, 5 ,4)},
  {id: 'e4' ,title: 'sss' , amount: '1aw2.2' , date: new Date(2021, 5 ,4)},
        

];
const App = () => {
  
  const [expenses,setexpenses]= useState(dummy_data);

  const addExpenseHandler = expense =>{
    setexpenses((prevEx) =>{
      return[expense , ...prevEx];
    });


  };
  console.log(expenses)
  return (
    
      <div className='App'>
      <NewExpe onAddExpense={addExpenseHandler}/>
      
      <Expenses items={expenses}/>
      </div>
     
  
  );

  
}


  export default App;
 