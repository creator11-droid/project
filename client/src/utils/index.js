import axios from "axios";

const productionUrl = "http://localhost:3001/api/v1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
