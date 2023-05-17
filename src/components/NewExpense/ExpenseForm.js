import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState('');
  const [enteredAmount, setEnterAmount] = useState('');
  const [enteredDate, setEnterDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  
  const titleChangeHandler = (event) =>{
    setEnterTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value}
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)

    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        {/* Title */}
        <div className='expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        {/* Amount */}
        <div className='expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        {/* Date */}
        <div className='expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
        </div>

        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;