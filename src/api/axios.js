import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_UR || "http://localhost:8080/api/v1";
console.log("BASE_URL",BASE_URL)
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json'
  },
  transformRequest: [
    data => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    data => {
      return JSON.parse(data);
    },
  ],
});

export default http;
