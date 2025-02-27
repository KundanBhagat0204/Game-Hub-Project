import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a1a380e6b0d14b2a9059701fbd280895",
  },
});
