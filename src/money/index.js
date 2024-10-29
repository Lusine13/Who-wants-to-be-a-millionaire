import { useState } from 'react';
import { EarningMoney } from '../constants';
import './index.css';


const Money = () => {
    const [ questionNumber, setQuestionNumber ] = useState(0)
    return (
        <div className='aside_container'>
           <ul className='moneyList'>
           {EarningMoney.map((amount, index) => (
            <li className={questionNumber === index ? 'moneyListItem active' : 'moneyListItem'}>                 
                <span className='number'>{index + 1}</span>
                <span className='amount'>{amount}</span>
            </li>
            ))}
           </ul>
        </div>
    )
};

export default Money;