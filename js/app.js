import { secrets } from '../secrets/secrets.js';

const fetchData = async (reference) => {
  const response = await fetch(`${secrets.url}${reference}?api_key=${secrets.apiKey}&language=en-US&sort_by=vote_average.desc`);
  const data = await response.json();
  return data;
};

const actors = await fetchData('person/popular');

console.log(actors.results[0]);
