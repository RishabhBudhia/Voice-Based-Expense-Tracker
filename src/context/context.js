import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

// const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '1' }, { amount: 225, category: 'Investments', type: 'Income', date: '2020-11-16', id: '2' }, { amount: 50, category: 'Salary', type: 'Income', date: '2020-11-13', id: '3' }, { amount: 123, category: 'Car', type: 'Expense', date: '2020-11-16', id: '4' }, { amount: 50, category: 'Pets', type: 'Expense', date: '2020-11-13', id: '5' }, { amount: 500, category: 'Travel', type: 'Expense', date: '2020-11-13', id: '6' }, { amount: 50, category: 'Investments', type: 'Income', date: '2020-11-23', id: '7' }, { amount: 500, category: 'Savings', type: 'Income', date: '2020-11-23', id: '8' }, { amount: 5, category: 'Savings', type: 'Income', date: '2020-11-23', id: '9' }];
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '1' }, { amount: 225, category: 'Investments', type: 'Income', date: '2020-11-16', id: '2' }, { amount: 50, category: 'Salary', type: 'Income', date: '2020-11-13', id: '3' }, { amount: 123, category: 'Car', type: 'Expense', date: '2020-11-16', id: '4' }, { amount: 50, category: 'Pets', type: 'Expense', date: '2020-11-13', id: '5' }, { amount: 500, category: 'Travel', type: 'Expense', date: '2020-11-13', id: '6' }, { amount: 50, category: 'Investments', type: 'Income', date: '2020-11-23', id: '7' }, { amount: 500, category: 'Savings', type: 'Income', date: '2020-11-23', id: '8' }, { amount: 5, category: 'Savings', type: 'Income', date: '2020-11-23', id: '9' }]

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            transactions,
            balance,
            deleteTransaction,
            addTransaction,
        }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    );
};