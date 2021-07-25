import { useFormik } from 'formik';
import Validators from '../utils/validators';
import Button from './Button';
import '../styles/FormLogin.css';

/** 
 * Form of login with email and password
 * @constructor
 * @prop {function} handleSubmit - action form function
 * @prop {boolean} loading - loading state
 */
function FormLogin({ handleSubmit, loading = false }) {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            keepLogged: false
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (!Validators.validateEmail(values.email)) errors.email = "Invalid email address";
            if (values.password.length < 4 || values.password.length > 20) errors.password = "Invalid password";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <div className="w-100 d-flex justify-content-center">
            <form onSubmit={formik.handleSubmit}
                className="formLogin d-flex flex-column align-items-center col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 px-3 py-3 mb-3">
                <div className="d-flex flex-column col-12 col-sm-10 col-md-10">
                    <h3 className="formLogin__title fw-bold my-3">Welcome</h3>

                    <label htmlFor="email" className="mt-3 formLogin__label">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                        minLength={4}
                        maxLength={50}
                        className="formLogin__input px-2"
                    />
                    <span className="formLogin__error text-danger">{formik.errors.email}&nbsp;</span>

                    <label htmlFor="email" className="mt-4 formLogin__label">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password}
                        maxLength={20}
                        minLength={4}
                        className="formLogin__input px-2"
                        autoComplete="on"
                    />
                    <span className="formLogin__error text-danger">{formik.errors.password}&nbsp;</span>

                    <div className="formLogin__checkbox">
                        <input
                            id="keepLogged"
                            name="keepLogged"
                            type="checkbox"
                            onChange={formik.handleChange}
                            value={true}
                        />
                        <label htmlFor="keepLogged" className="text-light">&nbsp; Keep session open</label>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button type="submit" disabled={loading}>Log In</Button>
                    </div>
                    <div className="text-center mt-2" style={{height: "2em"}}>
                        {loading ?
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : ''}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormLogin;