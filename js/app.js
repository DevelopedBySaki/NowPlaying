import { secrets } from '../secrets/secrets.js';

const fetchData = async (reference) => {
  const response = await fetch(`${secrets.url}${reference}?api_key=${secrets.apiKey}&language=en-US&with_original_language=en`);
  // ToDo: check how exactly original language is working. It is showing movies on other languages
  const data = await response.json();
  return data;
};

const movieNowPlaying = await fetchData('movie/now_playing');
console.log(movieNowPlaying.results);

const moviesPopular = await fetchData('movie/popular');
console.log(moviesPopular.results);

const showsNowPlaying = await fetchData('tv/on_the_air');
console.log(showsNowPlaying.results);

const showsPopular = await fetchData('tv/popular');
console.log(showsPopular.results);

const actorsPopular = await fetchData('person/popular');
console.log(actorsPopular.results);
