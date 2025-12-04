import axios from 'axios';

const BASE_API = import.meta.env.VITE_PRODUCTS_API;

async function getAllProducts(nextPage = 1, limit = 20, search = "") {
    try {
        const response = await axios.get(`${BASE_API}?page=${nextPage}&limit=${limit}&search=${search}`);
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}

const PRODUCTS = {
    GET: getAllProducts
}

export default PRODUCTS;
