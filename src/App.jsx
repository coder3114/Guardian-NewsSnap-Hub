import "./App.css";
import Axios from "axios";
import data from "../mockNewsData.json";

function App() {
  const GetNewsMock = () => {
    return data.mockApiResponse.response.results.map((news, key) => {
      return (
        <>
          <img src={news.fields.thumbnail} />
          <h1 key={key}> {news.webTitle} </h1>
        </>
      );
    });
  };

  const GetNews = () => {
    Axios.get(
      "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=cfbd00ae-c12a-49b7-b4c8-be4f1e29b55d"
    ).then((res) => {
      return res.data.response.results.map((news, key) => {
        return (
          <>
            <img src={news.fields.thumbnail} />
            <h1 key={key}> {news.webTitle} </h1>
          </>
        );
      });
    });
  };

  return (
    <>
      <GetNewsMock />
    </>
  );
}

export default App;
