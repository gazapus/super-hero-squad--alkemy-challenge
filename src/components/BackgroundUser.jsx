import '../styles/BackgroundUser.css';
import BackgroundImage from '../images/dots.png';
import Navbar from '../components/Navbar';
import Footer from './Footer';

/** 
 * User page container with an animated background
 * @constructor
 * @prop {children} - page body
 */
function BackgroundUser({children}) {
    return (
        <div className="backgroundUser container-fluid p-0 d-flex flex-column">
            <div className="backgroundUser__image d-flex flex-column w-100 pb-3" style={{ backgroundImage: `url(${BackgroundImage})` }} >
                <Navbar />
                <div className="container">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BackgroundUser;