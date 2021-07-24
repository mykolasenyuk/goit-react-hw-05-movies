import axios from 'axios';

// const API_KEY = '1aa8151ecc72e8e6dae871e3aeaed3b2';
// const BASE_URL = 'https://api.themoviedb.org/3';
// ${BASE_URL}trending/movie/day?api_key=${API_KEY}
// movie/${id}?api_key=${API_KEY}&language=en-US
// movie/${id}/credits?api_key=${API_KEY}

export const fetchTrendingMovies = async () => {
  try {
    const tredingFilms = await axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
      )
      .then(({ data }) => data.results);
    return tredingFilms;
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
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
      )
      .then(res => res.data);
    return movieDetails;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCastById = async id => {
  try {
    const movieDetails = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
      )
      .then(res => res.data)
      .then(data => data.cast);
    return movieDetails;
  } catch (error) {
    console.error(error);
  }
};

// const fetchReviewById = async id => {
//   const { data } = await axios.get(
//     `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   );

//   if (data) return data;
// };

// export default {
//   fetchTrendingMovies,
//   fetchSearchingMovies,
//   fetchMovieById,
//   fetchCastById,
//   fetchReviewById,
// };

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
