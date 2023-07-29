import axios from "axios";

export const getNews = async () => {
  try {
    // For Mock API
    // const res = await axios.get(`http://localhost:3000/response`);
    // return res.data.results;

    // For Real API call
    const res = await axios.get(
      `https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=cfbd00ae-c12a-49b7-b4c8-be4f1e29b55d`
    );
    return res.data.response.results;
  } catch (error) {
    return error;
  }
};
