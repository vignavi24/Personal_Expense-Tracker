import React from 'react';
import expenseService from '../services/expenseService';

function ExpenseList({ expenses, setExpenses }) {
  const handleDelete = async (id) => {
    try {
      await expenseService.deleteExpense(id);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id} className="bg-white p-4 shadow-md rounded mb-4 flex justify-between items-center">
            <div>
              <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString()}</p>
              <p><strong>Amount:</strong> ${expense.amount}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Description:</strong> {expense.description}</p>
            </div>
            <button onClick={() => handleDelete(expense._id)} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
