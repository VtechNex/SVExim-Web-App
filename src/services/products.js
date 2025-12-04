import axios from 'axios';

const BASE_API = import.meta.env.VITE_PRODUCTS_API;

async function getAllProducts(page = 1, limit = 21, search = "", filter) {
    try {
        const response = await axios.get(BASE_API, {
            params: { page, limit, search, ...filter },
            headers: { "Content-Type": "application/json" },
        });
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
