
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getData } from '../DataServices/DataService';
import { useEffect, useState } from 'react';
import AdvicePageComponent from './AdvicePageComponent';
import icon from "../Assets/icon-dice.svg"

const HomePageComponent = () => {

  const [advice, setAdvice] = useState({});

  const handleClick = async () => {
    setAdvice(await getData());
    console.log(advice)
  }

  useEffect( () => {
    const doThis = async () => {
      setAdvice(await getData());
    }

    doThis();

  }, []);

  return (
    <>
    <div className="mid">
      <div className="boxed-up">
        <AdvicePageComponent Advice={advice.advice} ID={advice.id}></AdvicePageComponent> 
        <br></br>
        <Button className="butn" onClick={handleClick}><img src={icon}></img></Button>
      </div>
    </div>
    </>
  )
}

export default HomePageComponent