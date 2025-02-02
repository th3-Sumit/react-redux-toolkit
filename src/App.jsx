import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/Counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement=() => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncByAmount = () => {
    dispatch(incrementByAmount(Number(amount)))
  }

  const handleReset = () => {
    dispatch(reset())
  }
  return(
    <div className='main_container'>
      <h2 className="heading">React Redux Example</h2>
      <div className="button_container" style={{marginBottom: "20px"}}>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset} style={{marginLeft: "10px"}}>Reset Value</button>
      </div>
      <div className="col">
      <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount}/>
      <button onClick={handleIncByAmount} style={{marginLeft: "10px"}}>IncByAmountValue</button>

      </div>
    </div>
  )
}

export default App