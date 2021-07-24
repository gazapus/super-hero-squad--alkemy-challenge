import axios from 'axios';

async function search(name) {
    return axios.get("https://www.superheroapi.com/api.php/3282090465183136/search/" + name)
        .then((response) => {
            if(response.data.error) return [];
            return response.data.results;
        })
        .catch((error) => {
            return error;
        });
};

async function get(id) {
    return axios.get("https://www.superheroapi.com/api.php/3282090465183136/" + id)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            alert(error);
        });
};

let methods = {
    search,
    get
};

export default methods;