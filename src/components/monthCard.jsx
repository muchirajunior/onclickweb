import './styles.scss';
import star from '../assets/star.png';

function MonthCard(props) {
    const {month, amount}=props;

    return (
        <div className='month-card' >
            <div className="month-card__title">
                <img src={star} width='80px' alt="" />
                <span>{month}</span>
             </div>
             <div className='month-card__detail'>total {amount}lts</div>   
        </div>
    );
}

export default MonthCard;