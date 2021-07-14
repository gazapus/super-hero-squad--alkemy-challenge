import TextBanner from "./TextBanner";
import DropdownButton from "./DropdownButton";
import { Link, useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';
import '../styles/Navbar.css';
import AuthService from '../services/auth.service';


function Navbar() {
    const history = useHistory();

    function logout() {
        AuthService.logout();
        history.push(pathnames.home);
    }

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid container">
                <Link to={pathnames.home} style={{ textDecoration: 'none' }}>
                    <TextBanner size="sm" neonEffect>SUPER HERO <span className="navbar__br"></span> SQUAD</TextBanner>
                </Link>
                <DropdownButton title="Usuario">
                    <button className="btn text-light border-bottom" onClick={logout}>Salir</button>    
                </DropdownButton>
            </div>
        </nav>
    )
}

export default Navbar;