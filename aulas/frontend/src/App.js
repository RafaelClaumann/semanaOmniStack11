import React, { useState } from 'react';
import Header, { HeaderProps, HeaderPropsChild, HeaderPropsDesest } from './Header';

// criando Header em App.js
function App() {
  return (
    <h1>Header em App.js</h1>
  );
}

// component Header.
export function App1() {
  return (<Header />);
}

// component Header com Properties.
export function App2() {
  return (
    <HeaderProps title="Header Component e Properties." />
  );
}

// component Header com Children e Desestruturação.
export function App3() {
  return (
    <HeaderPropsDesest>
      Header Component, Children e Desestruturaçao.
    </HeaderPropsDesest>
  );
}

// component Header com Properties e Children.
export function App4() {
  return (
    <HeaderPropsChild>
      Header Component, Properties e Children.
    </HeaderPropsChild>
  );
}

export function Counter() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  function increment() {
    //counter++;
    setCounter(counter + 1);
  }

  return (
    <div>
      <HeaderPropsChild>Contador:{counter}</HeaderPropsChild>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
