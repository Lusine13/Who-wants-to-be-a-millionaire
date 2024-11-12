import { useState } from 'react';
import Questions from '../questions';
import Timer from '../timer';
import Money from '../money';
import { questionAnswers } from '../../constants';

import './index.css';

const Millionaire = () => {
    const [ questionNumber, setQuestionNumber ] = useState(0)
    const [ stop, setStop ] = useState(false);
    const [ fiftyFiftyUsed, setFiftyFiftyUsed ] = useState(false); 
    const [ callFriendUsed, setCallFriendUsed ] = useState(false);
    const [ earned, setEarned ] = useState(0);
   
   
    const restartGame = () => {
        setQuestionNumber(0);  
        setStop(false);  
        setFiftyFiftyUsed(false);  
        setCallFriendUsed(false); 
        setEarned(0);
    };
    return (
        <div className="main_container">
            <Timer 
            stop={stop}
            setStop ={setStop} 
            questionNumber={questionNumber} />

            <Questions 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            questionAnswers={questionAnswers}
            setStop={setStop}
            fiftyFiftyUsed={fiftyFiftyUsed}
            callFriendUsed={callFriendUsed}
            set50_50Used={setFiftyFiftyUsed}
            setCallUsed={setCallFriendUsed}
            />   
            <Money 
                questionNumber={questionNumber} 
                earned={earned} 
                setEarned={setEarned} 
            /> 
             {stop && (
                <button className="restartButton" onClick={restartGame}>
                    Restart Game
                </button>
            )}        
        </div>
    );
};

export default Millionaire;
