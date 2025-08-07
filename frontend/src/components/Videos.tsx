import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft as LeftArrow, ChevronRight as RightArrow } from "lucide-react";
import placeholder1 from "../assets/placeholder_1.jpg";
import placeholder2 from "../assets/placeholder_2.jpg";
import placeholder3 from "../assets/placeholder_3.jpg";
import placeholder4 from "../assets/placeholder_4.jpg";

interface Blog {
  id: number;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
}

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);
  const intervalRef = useRef<number | null>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      description: "Nigerian High-Level Delegation Visits INSA for Educational Tour",
      imageUrl: placeholder1,
      learnMoreUrl: "https://www.insa.gov.et/web/guest/w/news-06-2",
    },
    {
      id: 2,
      description: "Cuban Deputy Prime Minister Visits Information Network Security Administration",
      imageUrl: placeholder2,
      learnMoreUrl: "https://www.insa.gov.et/web/guest/w/news-02-6",
    },
    {
      id: 3,
      description: "EMAO Leadership and Staff Conduct Green Legacy Initiative",
      imageUrl: placeholder3,
      learnMoreUrl: "https://www.insa.gov.et/web/guest/w/news-1-1",
    },
    {
      id: 4,
      description: "INSA Hosts 2023 Cybersecurity Awareness Month",
      imageUrl: placeholder4,
      learnMoreUrl: "https://www.insa.gov.et/web/guest/w/untitled-basic-web-content-13",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCardsCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCardsCount(2);
      } else {
        setVisibleCardsCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, blogs.length]);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < visibleCardsCount; i++) {
      const index = (currentIndex + i) % blogs.length;
      visibleCards.push(blogs[index]);
    }
    return visibleCards;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-6 md:mb-12">Videos</h1>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-4 md:gap-4 transition-all duration-500 pr-6">
          {getVisibleCards().map((blog) => (
            <div key={blog.id} className="w-full flex-shrink-0" style={{ width: `${100/visibleCardsCount}%` }}>
              <Link to={blog.learnMoreUrl} className="group block h-full">
                <div className="relative rounded-xl shadow-lg overflow-hidden h-48 sm:h-64 md:h-72 transition-all duration-300 hover:shadow-xl">
                  <img
                    src={blog.imageUrl}
                    alt={blog.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#2F3641]/58 flex flex-col justify-end px-4 py-2 md:px-6 md:py-4">
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {visibleCardsCount < blogs.length && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70"
            >
              <LeftArrow className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % blogs.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 md:p-2 rounded-full hover:bg-black/70"
            >
              <RightArrow className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Videos;