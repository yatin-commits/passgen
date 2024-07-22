
import './App.css';
import { useState } from "react";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { LC, NC, SC, UC } from './data/passChar';

function App() {

  let [upperCase,setUpperCase]=useState(false);
  let [lowerCase,setLowerCase]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbol,setSymbol]=useState(false);
  let [passLen,setPassLen]=useState(10);
  let [fpass,setFpass]=useState(' ');
  function changeLen(event)
  {
    setPassLen(event.target.value)

  }


  let createPasswod=()=>{
    let finalPass='';
    let charSrt='';
    if(upperCase|| lowerCase||symbol||number){
      if(upperCase)charSrt+=UC;
      if(lowerCase)charSrt+=LC;
      if(number)charSrt+=NC;
      if(symbol)charSrt+=SC;

      for(let i=0;i<passLen;i++)
      {
        finalPass=finalPass+charSrt.charAt(Math.floor(Math.random()*charSrt.length));
      }
      setFpass(finalPass)
      



      // console.log(charSrt);
    }


    
    else{
      NotificationManager.warning('Select Atleast One CheckBox!');
    }

    

  }
  let copyPass=()=>
    {
      navigator.clipboard.writeText(fpass)
      NotificationManager.success('Password Copied');
    }
  return (
    <>
    <NotificationContainer/>
    <div className='passwordBox'>
      <h2>Password Generator</h2>

        <div className='passwordBoxIn'> <input type='text' value={fpass} readOnly/><button onClick={copyPass}>Copy</button></div>
        <div className='passlen'>
          <label>Password length</label>
          <input type='number' value={passLen} onChange={changeLen} max={20} min={10}/>
        </div>
        <div className='passlen'>
          <label>Include UpperCase</label>
          <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)} max={20}/>
        </div>
        <div className='passlen'>
          <label>Include LowerCase</label>
          <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)} max={20}/>
        </div>
        <div className='passlen'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} max={20}/>
        </div>
        <div className='passlen'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)} max={20}/>
        </div>

        <button className='btn' onClick={createPasswod} >Generate Passoword</button>
        
        
        
        </div>

    
    </>
  );
}

export default App;
