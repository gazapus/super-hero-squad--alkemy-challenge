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
            return true;
        });
};

function getToken() {
    let sessionToken = sessionStorage.getItem("token") || localStorage.getItem("token");
    return JSON.parse(sessionToken);
};

function logout() {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    return true;
}

let methods = {
    signin,
    getToken,
    logout
};

export default methods;