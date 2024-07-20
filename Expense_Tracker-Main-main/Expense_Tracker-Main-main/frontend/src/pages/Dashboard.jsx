import React, { useEffect, useState } from 'react';
import expenseService from '../services/expenseService';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expenseService.getExpenses();
        setExpenses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default Dashboard;
