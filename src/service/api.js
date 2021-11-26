import axios from "axios";

const api = axios.create({
  baseURL: "https://grayscreen.herokuapp.com/",
});

export default api;
