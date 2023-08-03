// services/api.js
import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";

const api = axios.create({
  baseURL,
});

export const getCharacters = (queryParams) =>
  api.get("character", { params: queryParams });
