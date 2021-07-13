import axios from 'axios';

async function signin(email, password, keepLogged) {
    return axios.post("http://challenge-react.alkemy.org/", { email, password })
        .then((response) => {
            if (keepLogged) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            } else {
                sessionStorage.setItem("token", JSON.stringify(response.data.token));
            }
            return false;
        })
        .catch((error) => {
            alert(error.response.data.error)
            return true;
        });
};

function getToken() {
    let sessionToken = sessionStorage.getItem("token") || localStorage.getItem("token");
    return JSON.parse(sessionToken);
};

let methods = {
    signin,
    getToken
};

export default methods;