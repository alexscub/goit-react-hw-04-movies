import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9364b1c069b279059da25428c5e601fe';

const fetchTrendingMovies = () => {
  return axios
    .get(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};
const fetchMovieById = id => {
  return axios
    .get(`${API_URL}movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
};
const fetchSearchMovie = query => {
  return axios
    .get(`${API_URL}search/movie?api_key=${API_KEY}&${query}`)
    .then(response => response.data.results);
};

export default { fetchTrendingMovies, fetchMovieById, fetchSearchMovie };
