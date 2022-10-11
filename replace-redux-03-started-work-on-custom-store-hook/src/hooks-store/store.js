import { useState, useEffect } from 'react';

// these variables load once when the store is loaded
// we are managing data outside the useStore custom hook
// but all files that import this file will both data and logic
let globalState = {};
let listeners = [];
let actions = {};

// custom hook
// when the state is updated, any component using it will re-render
// same goes for custom hooks

const useStore = () => {
  // interested in the second value
  const [setState] = useState(globalState)[1];

  // useState will not change setState value to avoid infinite loop
  // useEffect to unmount a listener after it runs
  useEffect(() => {
    listeners.push(setState);

    // cleanup function when component is removed
    return () => {
      listeners = listeners.filter(li => li !== setState);
    }
  }, [setState]);

};