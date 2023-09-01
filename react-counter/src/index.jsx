import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css"

const Counter = ()=>{

const [isLit, setLit] = useState(0);
const add = ()=>{
  console.log("Clicked!");
  setLit(isLit + 1);
}
const sub =() =>{
  console.log("Clicked!");
  setLit(isLit - 1);
}
    return <div><div className='p-[1em] flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-[1em]'>
    <h1 className='w-[100%] text-center'>React <span className='text-[#c5c6c7]'>Counter</span></h1>
    <div className='flex justify-center items-center w-[100vw] h-[fit-content] gap-[1em] p-[1em]'>
      <button className='sub w-[4em] h-[4em] p-[1em] bg-[#1f2833] text-[#c5c6c7] flex justify-center items-center' onClick={sub}>Sub</button>
      <p>{isLit}</p>    
      <button className='add w-[4em] h-[4em] p-[1em] bg-[#1f2833] text-[#c5c6c7] flex justify-center items-center' onClick={add} >Add</button>
      </div>
      </div>
</div>     
  };
ReactDOM.render(<Counter/>, document.querySelector('#root'));