const API_KEY = "69a49ca8c8fecd6be780049311c24310"
const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWE0OWNhOGM4ZmVjZDZiZTc4MDA0OTMxMWMyNDMxMCIsIm5iZiI6MTc2NjE2ODM5Mi44ODEsInN1YiI6IjY5NDU5NzQ4ZWE3NzVkMTQ2OGIxYmVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eVkixgO1Bwh1Y_4BmkOeT2Ya_SVWYWjB4YPG8KsyiMU"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};
