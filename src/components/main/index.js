import { useState } from 'react';
import Questions from '../questions';
import Timer from '../timer';
import { questionAnswers } from '../../constants';

import './index.css';

const Millionaire = () => {
    const [ questionNumber, setQuestionNumber ] = useState(1)
    const [ stop, setStop ] = useState(false);
    const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false); 
    const [callFriendUsed, setCallFriendUsed] = useState(false);
   
    const restartGame = () => {
        setQuestionNumber(1);  
        setStop(false);  
        setFiftyFiftyUsed(false);  
        setCallFriendUsed(false);  
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
             {stop && (
                <button className="restartButton" onClick={restartGame}>
                    Restart Game
                </button>
            )}        
        </div>
    );
};

export default Millionaire;
