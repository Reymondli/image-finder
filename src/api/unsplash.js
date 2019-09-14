import axios from "axios";

// Assign unsplash token here.
const unsplashToken = "";

export default axios.create({
  headers: {
    Authorization: `Client-ID ${unsplashToken}`
  },
  baseURL: "https://api.unsplash.com"
});
