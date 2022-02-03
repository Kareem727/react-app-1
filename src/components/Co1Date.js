
import './Co1Date.css'


function Co1Dateee(propse){
    const month = propse.date.toLocaleString('en-US',{month: 'long'});
    const date = propse.date.toLocaleString('en-US',{day: '2-digit'});
    const year = propse.date.getFullYear();


    return(
        <div className='expense-date'>
           <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{date}</div>
            <div className='expense-date__year'>{year}</div> 
        </div>
    
   );
}

export default Co1Dateee;