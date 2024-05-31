import axios from 'axios';
import { generateHash } from './marvelAuth';

const baseURL = 'https://gateway.marvel.com/v1/public/characters';
const publicKey = 'f80d32527d9a696b5b606c2ad2944edf';

const getMarvelCharacters = async (offset = 0, limit = 20, nombre = '') => {
  const timestamp = new Date().getTime().toString();
  const hash = generateHash(timestamp);

  try {
    const response = await axios.get(baseURL, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash: hash,
        offset: offset,
        limit: limit,
        nameStartsWith: nombre
      }
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    throw error;
  }
};

const getTotalCharacters = async (nombre = '') => {
  const timestamp = new Date().getTime().toString();
  const hash = generateHash(timestamp);

  try {
    const response = await axios.get(baseURL, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash: hash,
        nameStartsWith: nombre
      }
    });
    return response.data.data.total;
  } catch (error) {
    console.error('Error fetching total characters:', error);
    throw error;
  }
};

export { getMarvelCharacters, getTotalCharacters };
