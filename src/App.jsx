import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getNews } from "./utils/newsDataService";
import { NewsList } from "./components/NewsList";
import { NewsSummary } from "./Components/NewsSummary";
import "./assets/styles/App.css";

function App() {
  const [news, setNews] = useState([]);

  const getData = async () => {
    const data = await getNews();
    console.log(data);
    if (data instanceof Error) {
      setNews([]);
    } else {
      setNews(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<NewsList news={news} />} />
        <Route
          path="/news-summary/:newsTitle"
          element={<NewsSummary news={news} />}
        />
      </Routes>
    </>
  );
}

export default App;
