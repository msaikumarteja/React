import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountAtom} from "./store/atom/count"
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
  
  return (
    <>
      <RecoilRoot>
      <Count />
      </RecoilRoot>  
    </>
  )
}

function Count(){
  return(
    <div>
      <Number/>
      <Button></Button>
    </div>
  )
}

function Number(){
  const count = useRecoilValue(CountAtom)
  return(
    <div>
      {count}
    </div>
  )
}
function Button(){
  const [count,setCount] = useRecoilState(CountAtom)

  return(
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default App
