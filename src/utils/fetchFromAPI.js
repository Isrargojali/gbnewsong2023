import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  params: {
    maxResults: "100",
  },
});

export const fetchFromAPI = async (url) => {
  try {
    const response = await instance.get(`/${url}`);
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("API request failed:", error);
    throw error;
  }
};
