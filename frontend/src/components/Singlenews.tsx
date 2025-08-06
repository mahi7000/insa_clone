import React from "react";
import { Link } from "react-router-dom";

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  isFeatured: boolean;
}

export interface SingleNewsProps {
  news: NewsItem;
}
const SingleNews: React.FC<SingleNewsProps> = ({ news }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl">
      {/* News Image */}
      <div className="relative h-48 w-full">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {news.category}
        </span>
      </div>

      {/* News Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {news.date}
          </span>
          {news.isFeatured && (
            <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-2">
          {news.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {news.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            By {news.author}
          </span>
          <Link
            to={`/news/${news.id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            aria-label={`Read more about ${news.title}`}
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
