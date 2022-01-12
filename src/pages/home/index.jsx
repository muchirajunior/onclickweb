import './style.scss'
import Navbar from "./navbar";
import Banner from './banner';
import About from "./about";
import Services from './services';
import Contact from './contact';
import Footer from './footer';

function Home(props) {
    return (
        <div>
           < Navbar />

           <div className='info-banner' id='info' >
                Download our app to keep updated on your dairy records.
                <a href='#!' onClick={()=>{document.getElementById('info').style.display='none';} } className='info-banner__close'>dismiss</a>
           </div>

           < Banner />

           < About />

           <Services/>

           < Contact />

           < Footer />
        </div>
    );
}

export default Home;