import './style.scss';
import farmerimg from '../../assets/milk.jpg';
import star from '../../assets/star.png';
import collecterimg from '../../assets/milkspash.jpg'

function Services(props) {
    const width=window.innerWidth;
    const twidth=width<800 ? width*.86 : width*.4;
    
    return (
        <div className='services' id='services'>
            <br />
            <div className='services__title'>Our Services</div>
            <br />
            <div className='services__container services__collapse'>
                <img src={farmerimg} className='services__image' alt="" />
                <div className='services__column'>
                    <img src={star} width='80px' alt="" />
                    <div className='services__info-title'>To Farmers</div>
                    <p className='services__info-text'  style={{width: twidth }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus sequi ad assumenda animi perferendis, officia dolore nemo eaque? Blanditiis placeat debitis minus quasi dignissimos modi quibusdam non saepe error!</p>
                </div>
            </div>
            <br /><br />
            <div className='services__container'>
            <div className='services__column'>
                <img src={star} width='80px' alt="" />
                <div className='services__info-title'> To Collecters</div>
                <p className='services__info-text' style={{width: twidth }}  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatibus error nemo eaque minus iste enim praesentium aperiam, laboriosam sequi quos molestiae reprehenderit consectetur quidem quaerat natus voluptate voluptates deserunt?</p>
            </div>
            <img src={collecterimg} className="services__image" height='auto' width='40%' alt="" />
            </div>
            <br />
        </div>
    );
}

export default Services;