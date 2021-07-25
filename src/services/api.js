import axios from 'axios';

const API_KEY = '1aa8151ecc72e8e6dae871e3aeaed3b2';
const BASE_URL = 'https://api.themoviedb.org/3';
// ${BASE_URL}trending/movie/day?api_key=${API_KEY}
// movie/${id}?api_key=${API_KEY}&language=en-US
// movie/${id}/credits?api_key=${API_KEY}

export const fetchTrendingMovies = async () => {
  try {
    const tredingFilms = await axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => data.results);
    return tredingFilms;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearcingMovies = async query => {
  try {
    const searchingMovies = await axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
      )
      .then(({ data }) => data.results);
    return searchingMovies;
  } catch (error) {
    console.error(error);
  }
};
// const fetchSearchingMovies = query => {
//   const { data } = axios.get(
//     `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
//   );
//   if (data) return data;
// };

export const fetchMovieById = async id => {
  try {
    const movieDetails = await axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.data);
    return movieDetails;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCastById = async id => {
  try {
    const getCast = await axios
      .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
      .then(res => res.data)
      .then(data => data.cast);
    return getCast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviewById = async id => {
  try {
    const getMovieReviews = await axios
      .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
      .then(res => res.data)
      .then(data => data.results);
    return getMovieReviews;
  } catch (error) {
    console.error(error);
  }
};

// export class ApiService {
//   async fetchTrendingMovies() {
//     try {
//       const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
//       if (data) return data;
//       return [];
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchSearchingMovies(query) {
//     try {
//       const { data } = axios.get(
//         `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
//       );
//       if (data) return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchMovieById(id) {
//     try {
//       const { data } = axios.get(
//         `movie/${id}?api_key=${API_KEY}&language=en-US`,
//       );

//       if (data) return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchCastById(id) {
//     try {
//       const { data } = await axios.get(
//         `movie/${id}/credits?api_key=${API_KEY}`,
//       );

//       if (data) return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchReviewById(id) {
//     try {
//       const { data } = await axios.get(
//         `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//       );
//       if (data) return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
