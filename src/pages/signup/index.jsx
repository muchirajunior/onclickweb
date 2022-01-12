import CustomInput  from '../../components/customInput';
import CustomButton  from '../../components/customButton';
import { useState } from 'react';
import   './style.scss';
import star from '../../assets/star.png';
import load from '../../assets/loading.gif';
import { useNavigate } from 'react-router';


function Login(props) {
   const navigate=useNavigate()
   const [loading, setLoading]= useState(false)
   const [details, setDetails]=useState({})

   function handleInput(name, input){
       details[name]=input;
       setDetails(details);
   }

    async function  submit() {
       setLoading(true)
       await setTimeout(()=>{
            setLoading(false);
            console.log(details);
            navigate('/farmer')
           },4000)   
   }

    return (
        <div className='body'>
            <div className='signup-container'>
                <div>
                    <img src={star} width='80px' alt="" />
                    <span className='title'>farmer login</span>
                    <img src={star} width='80px' alt="" />
               </div>
               <br />
               < CustomInput name='username' type='text' method={handleInput} />
               < CustomInput name='password' type='password' method={handleInput} />
               <br />
               <br />
               { loading ? <img src={load} type='submit' className='loading-image' alt="loading ..." />:  < CustomButton  method={submit} name='login' width='80%' />}

            </div>
            
        </div>
    );
}

export default Login;