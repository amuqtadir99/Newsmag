import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

// Mock news data for demo purposes
const mockNewsData = {
  general: [
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      description: "World leaders unite on ambitious climate targets for 2030, marking a significant step in environmental policy.",
      urlToImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400",
      url: "#"
    },
    {
      title: "Breakthrough in Quantum Computing Research",
      description: "Scientists achieve new milestone in quantum computing, bringing practical applications closer to reality.",
      urlToImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      url: "#"
    },
    {
      title: "International Space Station Welcomes New Crew",
      description: "Six astronauts from different nations begin their mission aboard the ISS for groundbreaking research.",
      urlToImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
      url: "#"
    }
  ],
  technology: [
    {
      title: "AI Revolution: New Language Model Breaks Records",
      description: "Latest artificial intelligence model demonstrates unprecedented capabilities in natural language processing.",
      urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      url: "#"
    },
    {
      title: "5G Network Expansion Reaches Rural Communities",
      description: "Telecommunications companies accelerate 5G rollout to bridge the digital divide in remote areas.",
      urlToImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      url: "#"
    }
  ],
  business: [
    {
      title: "Major Tech Merger Creates Industry Giant",
      description: "Two leading technology companies announce merger worth $50 billion, reshaping the industry landscape.",
      urlToImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
      url: "#"
    },
    {
      title: "Green Energy Stocks Surge Amid Policy Changes",
      description: "Renewable energy companies see significant gains following new government sustainability initiatives.",
      urlToImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400",
      url: "#"
    }
  ],
  sports: [
    {
      title: "Championship Finals Draw Record Viewership",
      description: "Sports fans worldwide tune in for the most-watched championship game in television history.",
      urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
      url: "#"
    },
    {
      title: "Olympic Preparations Underway in Host City",
      description: "Final preparations begin for the upcoming Olympic Games as athletes complete their training.",
      urlToImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      url: "#"
    }
  ]
};

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading time
    const loadNews = () => {
      setLoading(true);
      
      setTimeout(() => {
        const categoryNews = mockNewsData[category] || mockNewsData.general;
        setArticles(categoryNews);
        setLoading(false);
      }, 1000); // 1 second delay to simulate API call
    };

    loadNews();
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

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">{category}</span> News
      </h2>
      
      <div className="alert alert-info text-center mb-4">
        <small>
          <strong>Demo Mode:</strong> Showing sample news articles. 
          This is a demonstration of the NewsMag interface.
        </small>
      </div>
      
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
    </div>
  );
};

export default NewsBoard;
