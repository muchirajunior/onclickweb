import './style.scss';
import logo from '../../assets/onclick.png';
import CustomButton from '../../components/customButton';
import MenuIcon from '../../components/menuIcon';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
   const navigate =useNavigate()
   const login= ()=> navigate('/login') ;
   const register=()=> navigate('/register')
   
   const handleMenu=()=>{
       const menu=document.getElementById('menu')
       menu.style.display= menu.style.display==='none' ? "flex" :'none';
   }

    return (
        <div  id='home'>
            <div className='navbar__mobile' style={{display:'none'}} id='menu'>
                    <img src={logo} width='80%' onClick={handleMenu}  alt="" />
                    <a className='navbar__link' onClick={handleMenu} href="#home">home</a>
                    <a className='navbar__link' onClick={handleMenu} href="#about">about</a>
                    <a className='navbar__link' onClick={handleMenu} href="#services">services</a>
                    <a className='navbar__link'onClick={handleMenu}  href="#contact">contact us</a>
                    < CustomButton name='login' method={login} />
                    < CustomButton name='register' method={register} />

            </div>
            <nav className='navbar'>
                <a href="/">
                <img src={logo} className='navbar__logo'  alt="" />
                </a>
                <div className='navbar__links'>
                    <a className='navbar__link' href="#home">home</a>
                    <a className='navbar__link' href="#about">about</a>
                    <a className='navbar__link' href="#services">services</a>
                    <a className='navbar__link' href="#contact">contact us</a>
                    < CustomButton name='login' method={login} />
                    < CustomButton name='register' method={register} />

                </div>
                <span  className='navbar__menu-icon' onClick={handleMenu} > < MenuIcon /> </span>
        
            </nav>
        
        </div>
    );
}

export default Navbar;