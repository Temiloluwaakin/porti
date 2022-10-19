import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  lists: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_list',
      payload: id
    });
  }

  function addTransaction(lists) {
    dispatch({
      type: 'ADD_LIST',
      payload: lists
    });
  }

  return (<GlobalContext.Provider value={{
    lists: state.lists,
    deleteList,
    addList
  }}>
    {children}
  </GlobalContext.Provider>);
}