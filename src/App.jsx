import { useState } from "react";
import { fruitApi } from "./service/api";
import { newsApi } from "./service/api";

function App() {
  const [fruits, setFruits] = useState([]);
  const [news, setNews] = useState([]);

  const getFruits = async () => {
    const { data } = await fruitApi.get("/fruits");
    setFruits(data);
  };

  const getNews = async () => {
    const { data } = await newsApi.get("/news");
    setNews(data);
  };

  return (
    <>
      <div>
        <button onClick={getFruits}>Click to find the fruits</button>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>
              <h3>{fruit.name}</h3>
              <p>{fruit.category}</p>
              <span>{fruit.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={getNews}>Click to get the blog</button>
        <ul>
          {news.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <span>{article.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
