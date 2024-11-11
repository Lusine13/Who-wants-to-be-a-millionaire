import React, { useEffect, useState } from 'react';
import Millionaire from "./components/main";
import Money from "./components/money";
import { EarningMoney } from './constants';
import './App.css';

 const App = () => {
  const [ questionNumber, setQuestionNumber ] = useState(1) 
  const [ earned, setEarned ] = useState("$0")
  const [ stop, setStop ] = useState(false);
 
  useEffect(() => {
    if (questionNumber > 0) {      
      const currentMoney = EarningMoney[questionNumber - 1];
            setEarned(currentMoney); 
        }
  }, [questionNumber]);

  const resetGame = () => {
    setQuestionNumber(0); 
    setEarned("$0"); 
    setStop(false); 
  };

  return (
    <div className="container">
      {stop ? (
      <h1 className="endText">Դուք վաստակեցիք: {earned} </h1>
      ) : ( 
    <>
    <Millionaire 
            questionNumber={questionNumber} 
            setQuestionNumber={setQuestionNumber} 
            setStop={setStop}             
     />
     <Money
            questionNumber={questionNumber}           
     />
    </>
      )}     
    </div>  
  );
};

export default App;
