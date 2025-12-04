import axios from 'axios';

const BASE_API = import.meta.env.VITE_QUOTES_API;

async function makeQuote(quote) {
    try {
        const response = await axios.post(BASE_API, quote, {
            headers: { "Content-Type": "application/json" },
        });
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}

const QUOTES = {
    MAKE: makeQuote
}

export default QUOTES;
