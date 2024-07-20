import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

const getToken = () => {
  return localStorage.getItem('token');
};

const addExpense = async (expenseData) => {
  const config = {
    headers: {
      'x-auth-token': getToken(),
    },
  };
  const response = await axios.post(API_URL, expenseData, config);
  return response.data;
};

const getExpenses = async () => {
  const config = {
    headers: {
      'x-auth-token': getToken(),
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const deleteExpense = async (id) => {
  const config = {
    headers: {
      'x-auth-token': getToken(),
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

export default {
  addExpense,
  getExpenses,
  deleteExpense,
};
