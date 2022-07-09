import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [dropdownDate, setDropdownDate] = useState('2020');

  const dropdownDateFilterHandler = selectedDate => {
    setDropdownDate(selectedDate);
  }

  const filteredExpenses = props.expenseItems.filter(expense => {
    return expense.date.getFullYear().toString() === dropdownDate;
  })

  return (
    <div >
      <Card className="expenses">
        <ExpensesFilter selected={dropdownDate} onDropdownDateFilter={dropdownDateFilterHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenseItems={filteredExpenses}/>
      </Card>
    </div>
  )
};

export default Expenses
