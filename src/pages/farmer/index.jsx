import './style.scss';
import pic from '../../assets/prof.png'
import MonthCard from '../../components/monthCard';
import { months } from './data';
import DayCard from '../../components/dayCard';
import { useState } from 'react';

function FarmerPage(props) {

    const [month, setMonth]=useState('')
    const [expanded, setExpanded]=useState(false)
   
    const expandDetails=()=>{
        expanded ? setExpanded(false) : setExpanded(true);
        var x=document.getElementById('details');
        x.style.display = x.style.display !=='flex' ? "flex" : "none";

    }

    function handleMonthModal(month){
        setMonth(month);
        var modal=document.getElementById('month');
        modal.style.display = modal.style.display !=='flex' ? "flex" : "none";
    }

    return (
        <div>

            <div  className='month-record-modal' id='month'>
                <br />
                <div className='month-record-modal__header'> 
                    <span className='month-record-modal__title'>{month}</span>
                    <button className='month-record-modal__close-button' onClick={()=>handleMonthModal('')} >x</button>
                </div>
                <br />
               <div className='month-record-modal__records-container'>
                  { months.map((month)=>  
                        < DayCard  key={month.month} date='01-01-2021' amount={month.amount} />
                  ) }
               </div>
            </div>

            <div className='header'>
                <br />
                <div className='header__title-container'>
                    <span className='header__info-container'>
                       <div className='header__title' style={{fontSize:"40px"}} >John Muchira</div>
                       <div className='header__text'>345678922</div>
                    </span>
                    <img src={pic} width='100px' onClick={expandDetails} className='header__profile-image' alt="" />
                </div>
                <br />
                <button className='header__exapand-button' onClick={expandDetails} > { expanded ? 'mininize --' :" expand ++" } </button>
                <br />
                <div  id='details' className='header__details-container' >

                    <span className='header__info-container'>
                     <div className='header__text'>place</div>
                     <div className='header__title'>Nyeri, Tetu</div>
                    </span>

                    <span className='header__info-container'>
                     <div className='header__text'>collecter</div>
                     <div className='header__title'>James Henery</div>
                    </span>

                    <span className='header__info-container'>
                     <div className='header__text'>phone</div>
                     <div className='header__title'>+25471923456</div>
                    </span>

                    <span className='header__info-container'>
                     <div className='header__text'>type</div>
                     <div className='header__title'>Hybrid farmer</div>
                    </span>

                </div>
                <br />
            </div>
            <br />

            <div className='months-container'>
               { months.map((month)=> <div key={month.month} onClick={()=>handleMonthModal(month.month)} >
                   < MonthCard month={month.month} amount={month.amount} />
               </div> ) }
            </div>
            
        </div>
    );
}

export default FarmerPage;