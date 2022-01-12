import React, { useState } from 'react';
import CustomInput from '../../components/customInput';
import CustomTextArea from '../../components/customTextArea';
import CustomButton from '../../components/customButton';

function Contact(props) {
    const [details, setDetails]= useState({})

 
    function handleInput(name,input){
       details[name]=input;
       setDetails(details);        
    }

    const submit=(event)=>{ 
         console.log(details);}
    

    return (
        <div className='contact' id='contact'>
            <br />
            <div className='contact__title'> Contact Us</div>
            <br />
            <form onSubmit={(event)=>submit(event)} className='contact__container' >
                <div className='contact__column'>
                    < CustomInput  type='text' method={handleInput} name='name'  />
                    < CustomInput  type='email' method={handleInput} name='email'  />
                    < CustomInput  type='phone' method={handleInput} name='phone'  />
                </div>
                <div className='contact__column'>
                    < CustomTextArea  type='text' method={handleInput} height='120px' name='message' />
                    < CustomButton method={()=>{}} type='submit' width="80%" name='submit' />
                </div>
            </form>
            <br />
        </div>
    );
}

export default Contact;