import { useEffect, useState } from "react";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [featuredNews, setFeaturedNews] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.DEV
      ? "/api/data/msl_news_data"
      : `${import.meta.env.VITE_API_BASE_URL}/data/news`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("News data:", data);
        setNewsList(data);

        // Set the featured news randomly when the data is loaded
        const randomIndex = Math.floor(Math.random() * data.length);
        setFeaturedNews(data[randomIndex]);
      })
      .catch((err) => {
        console.error("Failed to fetch news", err);
      });
  }, []);

  const handleToggleContent = (idx) => {
    const updatedNewsList = [...newsList];
    updatedNewsList[idx].isExpanded = !updatedNewsList[idx].isExpanded;
    setNewsList(updatedNewsList);
  };

  return (
    <div className=" text-gray-100 p-6 min-h-screen">
      <h1 className="text-4xl font-extrabold text-left mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main News Section */}
        <div className="col-span-3 md:col-span-3 space-y-8">
          {newsList.length > 0 ? (
            newsList.map((news, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={`/assets/images/${news.news_img1}`}
                    alt={news.news_title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                    {news.news_title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">{news.news_subtitle}</p>

                  <div className="text-sm text-gray-400 mb-4">
                    <strong>Description:</strong>
                    <p className={`truncate ${news.isExpanded ? "" : "line-clamp-3"}`}>
                      {news.news_content}
                    </p>
                  </div>

                  {news.link && (
                    <p>
                      <a
                        href={news.link}
                        target="_blank"
                        className="text-indigo-400 hover:underline"
                      >
                        Read More
                      </a>
                    </p>
                  )}

                  <button
                    onClick={() => handleToggleContent(idx)}
                    className="mt-4 text-indigo-400 font-medium hover:underline"
                  >
                    {news.isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Loading news...</p>
          )}
        </div>

        {/* Featured News Section (on the right side) */}
        <div className="col-span-1 md:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Featured News</h2>
          {featuredNews ? (
            <div>
              <img
                src={`/assets/images/${featuredNews.news_img1}`}
                alt={featuredNews.news_title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {featuredNews.news_title}
              </h3>
              <p className="text-sm text-gray-400">{featuredNews.news_subtitle}</p>
              <p className="mt-4 text-indigo-400">
                <a href={featuredNews.link} target="_blank" className="hover:underline">
                  Read More
                </a>
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-400">Loading featured news...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
