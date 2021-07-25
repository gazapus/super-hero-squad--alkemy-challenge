import '../styles/FormSearch.css';
import { useFormik } from 'formik';

/** 
 * Form of character search
 * @constructor
 * @prop {function} handleSubmit - action form function
 */
function FormSearch({ handleSubmit = () => { } }) {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            handleSubmit(values.name)
        },
        validate: values => {
            let errors = {};
            if (values.name === "") errors.name = "Debe completar este campo";
            if (values.name.length > 30) errors.name = "Nombre muy largo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column align-items-center">
            <div className="searcherForm d-flex w-100 justify-content-center align-items-center p-1">
                <input
                    id="name"
                    name="name"
                    type="search"
                    maxLength={30}
                    placeholder="Superman..."
                    className="searcherForm__input border-0 h-100 col-9 col-md-7 col-lg-4 col-xl-3"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <button type="submit" className="searcherForm__button border-0 px-3 h-100 ">
                    <i className="bi bi-search  fs-5"></i>
                </button>
            </div>
            <small className="text-danger text-center" style={{ height: "1.2em" }}>{formik.errors.name}</small>
        </form>
    )
}

export default FormSearch;
