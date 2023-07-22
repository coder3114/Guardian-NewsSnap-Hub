import { useState } from "react";
import { useEffect } from "react";
import { getNews } from "../utils/newsDataService";
import { NewsList } from "./Components/NewsList";
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
      <NewsList news={news} />
    </>
  );
}

export default App;
