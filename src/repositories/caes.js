import config from '../config';

const URL_CAES = `https://restapidogregister.herokuapp.com/caes`;

const getAll = () => {
    return fetch(URL_CAES)
        .then(resposta => {
            return resposta.json()
        })
        .then(json => {
            return json
        })
}
getAll();

export default getAll;