import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";

/** 
 * Page Footer
 */
function Footer() {
    return (
        <footer className={`footer w-100 d-flex flex-column align-items-center py-5 px-0 d-block`}>
            <h5 className="footer__title text-light mb-3">Super Hero Squad</h5>
            <p className="footer__description text-center text-light">
                Website developed for <a href="https://www.alkemy.org/" target="_blank" rel="noreferrer">Alkemy's</a> challenge React
                <br className="footer__br" /> by <strong>Cristian Villafañe</strong>
            </p>
            <div className="d-flex justify-content-center w-100">
                <a href="https://www.github.com/gazapus" target="_blank" rel="noreferrer">
                    <i className="bi bi-github text-light fs-2" ></i>
                </a>
                <span className="mx-2"></span>
                <a href="https://www.linkedin.com/in/cristian-villafanie" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin text-light fs-2"></i>
                </a>
            </div>
            <p className="text-light footer__data mt-2">2021 | Buenos Aires, Argentina </p>
        </footer>
    )
}

export default Footer;