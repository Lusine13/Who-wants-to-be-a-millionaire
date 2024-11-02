import Questions from '../questions';
import Timer from '../timer';
import './index.css';

const Millionaire = () => {
    return (
        <div className="main_container">
            <Timer />
            <Questions />            
        </div>
    )
};

export default Millionaire;
