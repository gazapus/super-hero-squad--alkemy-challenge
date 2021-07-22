import '../styles/SearcherForm.css';
import { useFormik } from 'formik';

function Searcher({ handleSubmit = () => {}, loading = false }) {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            handleSubmit(values.name)
        },
        validate: values => {
            let errors = {};
            if (values.name == "") errors.name = "Debe completar este campo";
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
                    className="searcherForm__input h-100 col-9 col-md-8 col-lg-5 col-xl-4"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                    />
                <button type="submit" className="searcherForm__button col-3 col-md-2 col-lg-1 h-100 ">BUSCAR</button>
            </div>
            <span className="text-danger text-center" style={{height: "1.3em"}}>{formik.errors.name}</span>
        </form>
    )
}

export default Searcher;
