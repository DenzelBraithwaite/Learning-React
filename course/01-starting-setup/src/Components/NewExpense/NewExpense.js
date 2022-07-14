import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [newFormVisibility, setNewFormVisibility] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    props.onAddExpense(expenseData);
    setNewFormVisibility(false);
  };

  const formVisibilityHandler = () => {
    setNewFormVisibility(true);
  }

  const hideFormVisibility = () => {
    setNewFormVisibility(false);
  }

  return (
    <div className="new-expense">
      {!newFormVisibility && <button onClick={formVisibilityHandler}>Add New Expense</button>}
      {newFormVisibility && <ExpenseForm onCancel={hideFormVisibility} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
};

export default NewExpense;
