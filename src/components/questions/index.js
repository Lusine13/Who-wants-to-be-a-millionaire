import { useEffect, useState } from 'react';
import { questionAnswers } from '../../constants';
import './index.css';

const Questions = ({ questionNumber, setQuestionNumber, setStop, set50_50Used, setCallUsed, fiftyFiftyUsed, callFriendUsed }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerClass, setAnswerClass] = useState("answer");
    const [isAnswering, setIsAnswering] = useState(false);  

    useEffect(() => {
        setQuestion(questionAnswers[questionNumber]);
    }, [questionNumber]);

    const handleClick = (answer) => {
        if (isAnswering);  
        setIsAnswering(true); 
        setSelectedAnswer(answer);       
        setAnswerClass("answer active");

        setTimeout(() => {
            setAnswerClass(answer.correct ? "answer correct" : "answer wrong");
        }, 1000);
      
        setTimeout(() => {
            if (answer.correct) {
                setQuestionNumber((prev) => prev + 1); 
            } else {
                setStop(true); 
            }
        }, 3000); 
    };
    const handleFiftyFifty = () => {
        if (!fiftyFiftyUsed) {
            const incorrectAnswers = question.answers.filter((answer) => !answer.correct);
            const randomIncorrectAnswers = incorrectAnswers.slice(0, 2);
            const remainingAnswers = question.answers.filter(
                (answer) => !randomIncorrectAnswers.includes(answer)
            );
            setQuestion({ ...question, answers: remainingAnswers });
            set50_50Used(true);  
        }
    };

    const handleCallFriend = () => {
        if (!callFriendUsed) {
            const correctAnswer = question.answers.find((answer) => answer.correct);
            setSelectedAnswer(correctAnswer); 
            setAnswerClass("answer correct");
            setCallUsed(true);  
        }
    };
    return (
        <div className="questions_container">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer) => (
                    <div
                        key={answer.text}
                        className={selectedAnswer === answer ? answerClass : 'answer'}
                        onClick={() => handleClick(answer)}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>
            <div className="helpers">
                <button onClick={handleFiftyFifty} disabled={fiftyFiftyUsed}>50/50</button>
                <button onClick={handleCallFriend} disabled={callFriendUsed}>Call a Friend</button>
            </div>
        </div>
    );
};

export default Questions;
