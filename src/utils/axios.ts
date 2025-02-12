import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});