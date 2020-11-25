import axios from 'axios';

const Api = axios.create({
  baseURL: `https://api10minutos.herokuapp.com/categorias`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
}
});

export default Api