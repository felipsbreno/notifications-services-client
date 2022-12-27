import axios from 'axios';

export const apiUrlMicroservice = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const apiUrlKafkaProducer = axios.create({
  baseURL: 'http://localhost:8080/',
});
