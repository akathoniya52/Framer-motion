'use client'
import { counterContext } from "@/CounterContext/CounterContext";
import { useContext } from 'react'
export default function Home() {
  const { counter, increment, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
