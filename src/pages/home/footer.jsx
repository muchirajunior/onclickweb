import CustomInput from '../../components/customInput';
import './style.scss';
import star from '../../assets/star.png';
import CustomButton from '../../components/customButton';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer__column' >
                <img src={star} width='80px' alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum amet et quam accusantium sed. Cumque? </p>
            </div>
            <div className='footer__column' >
                <h2>Company</h2>
                <a className='navbar__link' href="#home">home</a>
                <a className='navbar__link' href="#about">about</a>
                <a className='navbar__link' href="#services">services</a>
                <a className='navbar__link' href="#contact">contact us</a>

            </div>
            <div className='footer__column' >
                <span>subscribe to our news letter</span>
                <span> < CustomInput name='email' type='email'  /> </span>
                < CustomButton name ='send' />
            </div>
            
        </div>  
    );
}

export default Footer;