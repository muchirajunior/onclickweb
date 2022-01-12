import image from '../../assets/milksplash.png';

function Banner(props) {
    return (
        <div className='banner'>
            <div className='banner__column1'>
               <span className='banner__title' >onclick <br /> brand</span>
               <br /><br />
               <span className='banner__text'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolores minus illo animi beatae vero nisi doloremque rerum ipsa praesentium, blanditiis facere temporibus? Assumenda ea sapiente quasi eos quaerat iste.</span>
               <br /><br /><br /><br />
              <a href="/login" className='banner__signup' >farmer signup</a>
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