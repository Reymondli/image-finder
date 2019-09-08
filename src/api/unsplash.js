import axios from "axios";

export default axios.create({
  headers: {
    Authorization:
      "Client-ID 3fdc7276ff3fa833b0f2d0fce797975e3d741728db02ad64d15ff512382a0981"
  },
  baseURL: "https://api.unsplash.com"
});
