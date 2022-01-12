import image from '../../assets/milksplash.png';
import { useNavigate } from 'react-router-dom';
function Banner(props) {
    const nav=useNavigate()
    return (

        <div className='banner'>
            <div className='banner__column1'>
               <span className='banner__title' >onclick <br /> brand</span>
               <br /><br />
               <span className='banner__text'>  We join tongether and improve Agriculture  through technology. Our main firm on dairy sales management. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque molestiae sequi sint. Accusantium, magni.</span>
               <br /><br /><br /><br />
              <button onClick={()=>nav('/login')} className='banner__signup' >farmer signup</button>
              <br />
              <button className='banner__signup banner__app-download' >donwload app</button>
            </div>
            <div className='banner__column2'>
                <img src={image} width='80%' alt="" />
            </div>
            
        </div>
    );
}

export default Banner;