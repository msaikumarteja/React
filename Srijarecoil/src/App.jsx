import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountAtom} from "./store/atom/count"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from '../../../week-7-master/src/store/atoms/count'

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
  console.log("Hello")
  return(
    <div>
      <Number/>
      <Button></Button>
    </div>
  )
}

function Number(){
  // console.log("Hello 1")
  const count = useRecoilValue(CountAtom)
  // if(count%2==0){
  //   return(
  //     <div>
  //       {count}
  //       <br />
  //       it is even number
  //     </div>
  //   )
  // }
  return(
    <div>
      {count}
    </div>
  )
}
function Button(){
  const setCount = useSetRecoilState(CountAtom)

  // const [count ,setCount] = useRecoilState(CountAtom)

  return(
    <div>
      <button onClick={()=>{setCount((count)=>count+1)}}>Increment</button>
      <button onClick={()=>{setCount((count)=>count-1)}}>Decrement</button>
      <Text/>
    </div>
  )
}

function Text(){
  const value = useRecoilValue(countAtom)
  if(value%2==0){
    return(
      <div>
        it is even number
      </div>
    )
  }
}

export default App
