import React , { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//Initial state
const initialState = {
    transactions:  [],
    error: null,
    loading: true,         
    budgets: [
        { id: 1, category:'House', amount: 200 , progress : 40},
        { id: 2, category:'Home', amount: 150 , progress : 110}
    ]
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] =  useReducer(AppReducer, initialState);

    // Actions
    async function getTransactions() {
       /* try {
          const res = await axios.get('http://localhost:5000/api/budget/');
    
          dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }*/
      }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    async function addTransaction(transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('http://localhost:5000/api/budget/add', transaction, config);
    
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }
    
    function addBudget(budget) {
        dispatch({
            type: 'ADD_BUDGET',
            payload: budget
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        budgets: state.budgets,
        addBudget,
    }}>
        {children}
    </GlobalContext.Provider>);
}