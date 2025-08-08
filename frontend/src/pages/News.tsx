// export default NewsPage;
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import placeholder1 from "../assets/placeholder_1.jpg";
import placeholder2 from "../assets/placeholder_2.jpg";
import placeholder3 from "../assets/placeholder_3.jpg";
import placeholder4 from "../assets/placeholder_4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  isFeatured: boolean;
  url: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "EMAO Leadership and Staff Conduct Green Legacy Initiative",
    description:
      "The leadership and employees of EMAO have successfully carried out their Green Legacy campaign, contributing to environmental sustainability.",
    image: placeholder4,
    date: "June 15, 2023",
    category: "Environment",
    author: "INSA Communications",
    isFeatured: true,
    url: "https://www.insa.gov.et/web/guest/w/news-2-12",
  },
  {
    id: 2,
    title:
      "Cuban Deputy Prime Minister Visits Information Network Security Administration",
    description:
      "Cuba's Deputy Prime Minister visited INSA to discuss matters related to cybersecurity and digital governance.",
    image: placeholder2,
    date: "July 22, 2023",
    category: "Diplomacy",
    author: "INSA Press Office",
    isFeatured: true,
    url: "https://www.insa.gov.et/web/guest/w/news-02-32",
  },
  {
    id: 3,
    title:
      "INSA Director Highlights Successes in National Cybersecurity and Digital Sovereignty",
    description:
      "Mrs. Tigist Hamid emphasized the administration's achievements in cybersecurity and digital sovereignty.",
    image: placeholder1,
    date: "August 5, 2023",
    category: "Cybersecurity",
    author: "INSA Media Team",
    isFeatured: false,
    url: "https://www.insa.gov.et/web/guest/home/-/asset_publisher/0d2Axs5zg3k7/content/id/395899?_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_0d2Axs5zg3k7_redirect=https%3A%2F%2Fwww.insa.gov.et%2Fweb%2Fguest%2Fhome%3Fp_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_0d2Axs5zg3k7%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_0d2Axs5zg3k7_cur%3D0%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_0d2Axs5zg3k7_assetEntryId%3D395899",
  },
  {
    id: 4,
    title: "Nigerian High-Level Delegation Visits INSA for Educational Tour",
    description:
      "Senior officials from Nigeria visited INSA, sharing knowledge on cybersecurity and infrastructure.",
    image: placeholder3,
    date: "September 12, 2023",
    category: "International Cooperation",
    author: "INSA Public Relations",
    isFeatured: false,
    url: "https://www.insa.gov.et/web/guest/w/news-03-15",
  },
];

const overlapStyles = [
  "z-10 translate-x-[0%] scale-50",
  "z-20 translate-x-[-30%] scale-70",
  "z-30 translate-x-[-60%] scale-100",
];

const NewsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Get the 3 current cards (last, mid, active)
  const rotatingNews = [
    newsData[(activeIndex + 2) % newsData.length],
    newsData[(activeIndex + 1) % newsData.length],
    newsData[activeIndex],
  ];

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % newsData.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + newsData.length) % newsData.length),
    trackMouse: true, // enables swipe on desktop too
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <h1 className=" ml-15 text-3xl font-bold text-gray-900 dark:text-white mb-10">
        News
      </h1>

      <div
        className=" relative w-[full] h-[400px] items-center parent "
        {...swipeHandlers}
      >
        <div className="relative items-center h-full  w-full check">
          {rotatingNews.map((news, index) => (
            <div key={news.id}>
              {/* ✅ Mobile version (only show active/front card) */}
              {index === 2 && (
                <Link to={news.url}>
                  <div className="lg:hidden ml-[0px] absolute w-[full] h-[400px] rounded-[9px] shadow-lg transition-all duration-700 ease-in-out   w-[100%] check">
                    <div className="relative h-full w-[100%] check">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                        <p className="text-sm mb-1 absolute -top-0 -right-0 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                          {news.date}
                        </p>
                        <h2 className="text-lg font-bold">{news.title}</h2>
                        <p className="text-sm mt-1">{news.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* ✅ Desktop version with stacking */}
              <div
                className={` ml-140 hidden lg:block absolute w-[800px] h-[400px] rounded-[9px] overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${overlapStyles[index]}`}
              >
                <div className="relative h-full">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  {index !== 2 && (
                    <div className="absolute inset-0 bg-black/20"></div>
                  )}
                  {index === 2 && (
                    <Link to={news.url}>
                      <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                        <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                          {news.date}
                        </p>
                        <h2 className="text-lg font-bold">{news.title}</h2>
                        <p className="text-sm mt-1">{news.description}</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Navigation Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() =>
            setActiveIndex(
              (prev) => (prev - 1 + newsData.length) % newsData.length
            )
          }
          className="p-4 bg-black/50 rounded-full hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <ChevronLeft className="w-6 h-6 text-white " />
        </button>
        <div className="flex justify-center items-center mt-1 space-x-2">
          {newsData.map((_, index) => (
            <span
              key={index}
              className={`block rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#E05C5F] h-4 w-4"
                  : "bg-[#E05C5F] opacity-50 h-3 w-3"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % newsData.length)}
          className="p-4 bg-black/50 rounded-full hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dot Indicators */}
    </div>
  );
};

export default NewsPage;
