import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'error') {
          throw new Error(data.message || 'API Error');
        }
        
        setArticles(data.articles || []);
      } catch (err) {
        console.error('News fetch error:', err);
        setError(err.message);
        setArticles([]); // Set empty array to prevent map error
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to load news</h4>
          <p>Error: {error}</p>
          <hr />
          <p className="mb-0">Please check your API key configuration or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">{category}</span> News
      </h2>
      
      {articles.length === 0 ? (
        <div className="text-center">
          <p>No news articles available at the moment.</p>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {articles.map((news, index) => (
            <NewsItem 
              key={index}
              title={news.title} 
              description={news.description} 
              src={news.urlToImage} 
              url={news.url} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
