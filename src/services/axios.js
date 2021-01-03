import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3030";

const http = axios.create({
  baseURL: baseUrl,
});

export default http;
