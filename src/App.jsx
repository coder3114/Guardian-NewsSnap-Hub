import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getNews } from "../utils/newsDataService";
import { NewsList } from "./Components/NewsList";
import { NewsSummary } from "./Components/NewsSummary";
import "./App.css";

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
      <Router>
        <Routes>
          <Route path="/" element={<NewsList news={news} />} />
          <Route
            path="/news-summary/:id"
            element={<NewsSummary news={news} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
