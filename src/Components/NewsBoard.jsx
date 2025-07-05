import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {articles.map((news, index) => (
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center" key={index}>
            <Newsitem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
