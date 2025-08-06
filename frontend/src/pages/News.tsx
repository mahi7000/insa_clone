import React from "react";
import { Link } from "react-router-dom";
import placeholder1 from "../assets/placeholder_1.jpg";
import placeholder2 from "../assets/placeholder_2.jpg";
import placeholder3 from "../assets/placeholder_3.jpg";
import placeholder4 from "../assets/placeholder_4.jpg";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  isFeatured: boolean;
}

const SingleNews: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 height-[5px] top-[150px]">
          <span className="absolute bottom-2  bg-grey-200 text-white text-xs px-2 py-1 rounded textcenter pt-3">
            {news.title}
          </span>
        </div>
      </div>
    </div>
  );
};

const NewsPage: React.FC = () => {
  // News data directly in component
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "EMAO Leadership and Staff Conduct Green Legacy Initiative",
      description:
        "The leadership and employees of EMAO (Information Network Security Administration) have successfully carried out their Green Legacy (reforestation) campaign, contributing to environmental sustainability efforts.",
      image: placeholder4,
      date: "June 15, 2023",
      category: "Environment",
      author: "INSA Communications",
      isFeatured: true,
    },
    {
      id: 2,
      title:
        "Cuban Deputy Prime Minister Visits Information Network Security Administration",
      description:
        "Jorge Luis Tapia Fonseca, Cuba's Deputy Prime Minister, paid a visit to the Information Network Security Administration (INSA) to discuss matters related to cybersecurity and digital governance.",
      image: placeholder2,
      date: "July 22, 2023",
      category: "Diplomacy",
      author: "INSA Press Office",
      isFeatured: true,
    },

    {
      id: 3,
      title: "Nigerian High-Level Delegation Visits INSA for Educational Tour",
      description:
        "A delegation of senior officials from Nigeria conducted an educational visit to INSA, engaging in knowledge-sharing and discussions on cybersecurity and digital infrastructure.",
      image: placeholder3,
      date: "September 12, 2023",
      category: "International Cooperation",
      author: "INSA Public Relations",
      isFeatured: false,
    },
  ];

  const featuredNews = newsData.filter((news) => news.isFeatured);
  const regularNews = newsData.filter((news) => !news.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Latest News
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 sm:mt-4">
            Stay updated with our latest activities and announcements
          </p>
        </header>

        {featuredNews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured News
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <SingleNews key={news.id} news={news} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <SingleNews key={news.id} news={news} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
