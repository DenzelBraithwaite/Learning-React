import './CSS/ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div >July 14th 2022</div>
      <div className="expense-item__description">
        <h2>New Tv</h2>
        <div className="expense-item__price">$500</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
