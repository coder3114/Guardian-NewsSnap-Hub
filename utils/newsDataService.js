import axios from "axios";

export const getNews = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/response`);
    return res.data.results;
  } catch (error) {
    return error;
  }
};
