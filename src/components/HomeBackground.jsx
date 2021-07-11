import '../styles/HomeBackground.css';
import CityImage from '../images/ciudad.png';
import StardustImage from '../images/stardust.png';



function HomeBackground() {

    return (
        <div className="homeBackground d-flex w-100" style={{ backgroundImage: `url(${StardustImage})` }}>
            <div className="homeBackground__slide homeBackground__slide-post "
                style={{ backgroundImage: `url(${CityImage})` }}>
            </div>
            <div className="homeBackground__slide homeBackground__slide-pre"
                style={{ backgroundImage: `url(${CityImage})` }}>
            </div>
        </div>
    )
}

export default HomeBackground;