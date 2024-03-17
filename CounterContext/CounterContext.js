"use client";
import { createContext, useState } from "react";

export const counterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  }
  return (
    <counterContext.Provider value={{ counter, increment,decrement}}>
      {children}
    </counterContext.Provider>
  );
};
