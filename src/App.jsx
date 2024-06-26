import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import ConditionalRender from './components/ConditionalRendering';
import CountText from './components/CountText';
import UseEffectComponent from './components/UseEffectComponent';
import ToDolist from './components/ToDoList';

function App()
{
  const [ count, setCount ] = useState(0);

  return (
    <>
      {/* <UseStateComponent />
      <ConditionalRender />
      <CountText />
      <UseEffectComponent /> */}
      <ToDolist />
    </>
  );
}

export default App;
