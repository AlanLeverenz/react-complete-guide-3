import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// custom hook
export const useStore = () => {
  // not recreated here, already defined
  // interested in the second useState value (updating function)
  const setState = useState(globalState)[1];

  // get actions
  const dispatch = actionIdentifier => {
    const newState = actions[actionIdentifier](globalState);
    // merges old state and new state
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      // passing new globalState to listener
      listener(globalState);
    }
  };

  // adds setState to listeners array
  listeners.push(setState);

  // useEffect controls when something mounts in the DOM
  // is mounting this setState
  useEffect(() => {
    listeners.push(setState);

    // filter to keep all listeners not equal to the existing setState
    return () => {
      listeners = listeners.filter(li => li !== setState);
    }
    // will only run once since React will not change it for a given component
  }, [setState]);

  return [globalState, dispatch]; //the new state and the action for it
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    // merge new globalState with current 
    globalState = { ...globalState, ...initialState };
  }
  // merging new and current actions
  actions = { ...actions, ...userActions };
}