import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/Counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement=() => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  return(
    <div className='main_container'>
      <h2 className="heading">React Redux Example</h2>
      <div className="button_container">
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App