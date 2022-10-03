import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// custom hook
const useStore = () => {
  // not recreated here, already defined
  // interested in the second useState value (updating function)
  const setState = useState(globalState)[1];
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
};