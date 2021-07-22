import './Login.css'
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import usePageHeight from '../hooks/usePageHeight';
import pathnames from '../utils/pathnames';
import AuthService from '../services/auth.service';
import TextBanner from '../components/TextBanner';
import Footer from '../components/Footer';
import HomeBackground from '../components/HomeBackground';
import FormLogin from '../components/FormLogin';
import alertar from '../components/Alert';

function Login() {
    const [loading, setLoading] = React.useState(false);
    const height = usePageHeight();
    const history = useHistory();
    
    React.useEffect(() => {
        if(AuthService.getToken()) history.push(pathnames.home);
    }, [])

    async function handleSubmit(values) {
        setLoading(true);
        let error = await AuthService.signin(values.email, values.password, values.keepLogged);
        setLoading(false);
        if (error) {
            alertar("ERROR: Usuario o contraseña no válido", "danger");
        } else {
            history.push(pathnames.home);
        }
    }

    return (
        <div className="cc container-fluid p-0" >
            <HomeBackground />
            <div className="login__background"></div>
            <div className="login d-flex flex-column w-100 align-items-center">
                <div className="mt-3 mb-0">
                    <Link to={pathnames.home} style={{textDecoration: 'none'}}>
                        <TextBanner size="md">SUPER HERO SQUAD</TextBanner>
                    </Link>
                </div>
                <div className="login__form w-100" >
                    <FormLogin handleSubmit={handleSubmit} loading={loading} />
                </div>
            </div>
            <Footer />
            <div className="homeBackground__base" style={{ height: `${height}px` }}></div>
        </div>
    )
}

export default Login;