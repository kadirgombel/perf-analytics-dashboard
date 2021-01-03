import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://performance-analytics-api.herokuapp.com"
    : "http://localhost:3030";

const http = axios.create({
  baseURL: baseUrl,
});

export default http;
