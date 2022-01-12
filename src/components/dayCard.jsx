import './styles.scss';

function DayCard({date,amount}) {
    return (
        <div className='day-card'>
            <span>{date}</span>
            <b>{amount} ltrs</b>
        </div>
    );
}

export default DayCard;