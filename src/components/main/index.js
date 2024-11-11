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
   
    return (
        <div className="main_container">
            <Timer 
            setStop ={setStop} 
            questionNumber={questionNumber} />

            <Questions 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setStop={setStop}
            fiftyFiftyUsed={fiftyFiftyUsed}
            callFriendUsed={callFriendUsed}
            set50_50Used={setFiftyFiftyUsed}
            setCallUsed={setCallFriendUsed}
            />            
        </div>
    );
};

export default Millionaire;
