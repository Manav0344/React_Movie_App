const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = import.meta.env.VITE_TMDB_BASE_URL;

export async function fetchFromTMDB(endpoint, params = {}) {
   
    const url = new URL(`${BASE}/${endpoint}`);

    url.searchParams.append('api_key', API_KEY);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error(`TMDB API request failed: ${response.statusText}`);
    }

    return response.json();
}

export const imageURL = (path, size = "w500") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
