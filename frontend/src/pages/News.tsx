// import React from "react";
// import { Link } from "react-router-dom";
// import placeholder1 from "../assets/placeholder_1.jpg";
// import placeholder2 from "../assets/placeholder_2.jpg";
// import placeholder3 from "../assets/placeholder_3.jpg";
// import placeholder4 from "../assets/placeholder_4.jpg";

// interface NewsItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   date: string;
//   category: string;
//   author: string;
//   isFeatured: boolean;
// }

// const SingleNews: React.FC<{ news: NewsItem }> = ({ news }) => {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl">
//       <div className="relative h-48 w-full">
//         <img
//           src={news.image}
//           alt={news.title}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-black/50 height-[5px] top-[150px]">
//           <span className="absolute bottom-2  bg-grey-200 text-white text-xs px-2 py-1 rounded textcenter pt-3">
//             {news.title}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NewsPage: React.FC = () => {
//   // News data directly in component
//   const newsData: NewsItem[] = [
//     {
//       id: 1,
//       title: "EMAO Leadership and Staff Conduct Green Legacy Initiative",
//       description:
//         "The leadership and employees of EMAO (Information Network Security Administration) have successfully carried out their Green Legacy (reforestation) campaign, contributing to environmental sustainability efforts.",
//       image: placeholder4,
//       date: "June 15, 2023",
//       category: "Environment",
//       author: "INSA Communications",
//       isFeatured: true,
//     },
//     {
//       id: 2,
//       title:
//         "Cuban Deputy Prime Minister Visits Information Network Security Administration",
//       description:
//         "Jorge Luis Tapia Fonseca, Cuba's Deputy Prime Minister, paid a visit to the Information Network Security Administration (INSA) to discuss matters related to cybersecurity and digital governance.",
//       image: placeholder2,
//       date: "July 22, 2023",
//       category: "Diplomacy",
//       author: "INSA Press Office",
//       isFeatured: true,
//     },

//     {
//       id: 3,
//       title: "Nigerian High-Level Delegation Visits INSA for Educational Tour",
//       description:
//         "A delegation of senior officials from Nigeria conducted an educational visit to INSA, engaging in knowledge-sharing and discussions on cybersecurity and digital infrastructure.",
//       image: placeholder3,
//       date: "September 12, 2023",
//       category: "International Cooperation",
//       author: "INSA Public Relations",
//       isFeatured: false,
//     },
//   ];

//   const featuredNews = newsData.filter((news) => news.isFeatured);
//   const regularNews = newsData.filter((news) => !news.isFeatured);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <header className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
//             Latest News
//           </h1>
//           <p className="mt-3 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 sm:mt-4">
//             Stay updated with our latest activities and announcements
//           </p>
//         </header>

//         {featuredNews.length > 0 && (
//           <section className="mb-16">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//               Featured News
//             </h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {featuredNews.map((news) => (
//                 <SingleNews key={news.id} news={news} />
//               ))}
//             </div>
//           </section>
//         )}

//         <section>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//             All News
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
//             {regularNews.map((news) => (
//               <SingleNews key={news.id} news={news} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default NewsPage;

// import { useEffect, useState } from "react";
// import placeholder1 from "../assets/placeholder_1.jpg";
// import placeholder2 from "../assets/placeholder_2.jpg";
// import placeholder3 from "../assets/placeholder_3.jpg";
// import placeholder4 from "../assets/placeholder_4.jpg";

// type NewsItem = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   date: string;
//   category: string;
//   author: string;
//   isFeatured: boolean;
// };

// const newsData: NewsItem[] = [
//   {
//     id: 1,
//     title: "EMAO Leadership and Staff Conduct Green Legacy Initiative",
//     description:
//       "The leadership and employees of EMAO have successfully carried out their Green Legacy campaign, contributing to environmental sustainability.",
//     image: placeholder4,
//     date: "June 15, 2023",
//     category: "Environment",
//     author: "INSA Communications",
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     title:
//       "Cuban Deputy Prime Minister Visits Information Network Security Administration",
//     description:
//       "Cuba's Deputy Prime Minister visited INSA to discuss matters related to cybersecurity and digital governance.",
//     image: placeholder2,
//     date: "July 22, 2023",
//     category: "Diplomacy",
//     author: "INSA Press Office",
//     isFeatured: true,
//   },
//   {
//     id: 3,
//     title:
//       "INSA Director Highlights Successes in National Cybersecurity and Digital Sovereignty",
//     description:
//       "Mrs. Tigist Hamid emphasized the administration's achievements in cybersecurity and digital sovereignty.",
//     image: placeholder1,
//     date: "August 5, 2023",
//     category: "Cybersecurity",
//     author: "INSA Media Team",
//     isFeatured: false,
//   },
//   {
//     id: 4,
//     title: "Nigerian High-Level Delegation Visits INSA for Educational Tour",
//     description:
//       "Senior officials from Nigeria visited INSA, sharing knowledge on cybersecurity and infrastructure.",
//     image: placeholder3,
//     date: "September 12, 2023",
//     category: "International Cooperation",
//     author: "INSA Public Relations",
//     isFeatured: false,
//   },
// ];

// const NewsPage = () => {
//   const [rotatingNews, setRotatingNews] = useState<NewsItem[]>(
//     newsData.slice(0, 3)
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotatingNews((prev) => [...prev.slice(1), prev[0]]);
//     }, 10000); // Rotate every 10 seconds

//     return () => clearInterval(interval);
//   }, []);

//   //   Styles for overlapping cards from left to right (most covered first)
//   const overlapStyles = [
//     "z-10 translate-x-[0%] scale-50",
//     "z-20 translate-x-[-30%] scale-70",
//     "z-30 translate-x-[-60%] scale-100",
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 onee">
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
//         News
//       </h1>

//       {/* <div className=" ml-140 relative w-[1200] h-[300px]   items-center  twoo">
//         <div className="relative  items-center h-full w-[full] ">
//           {rotatingNews.map((news, index) => (
//             <div
//               key={news.id}
//               className={`absolute  w-[800px] h-[400px] rounded overflow-hidden  shadow-lg/70    three${overlapStyles[index]}`}
//             >
//               <div className="bg-black/10 h-[full] top-[0px]">
//                 <img
//                   src={news.image}
//                   alt={news.title}
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//               {index === 2 && (
//                 // <div className="absolute inset-0  width-[800px] text-white p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-centre  fourr">
//                 //   <p className="text-sm bottom-0 mb-1">{news.date}</p>
//                 //   <h2 className="text-lg bottom-0 font-bold">{news.title}</h2>
//                 //   <p className="text-sm bottom-0  mt-1">{news.description}</p>
//                 // </div>
//                 <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start  fourr">
//                   <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary  opacity-75 text-white text-centre font-bold px-8 pt-3 pb-1 rounded-lg ">
//                     {news.date}
//                   </p>
//                   <h2 className="text-lg font-bold">{news.title}</h2>
//                   <p className="text-sm mt-1">{news.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div> */}

//       <div className=" ml-140 relative w-[1200] h-[300px] items-center twoo">
//         <div className="relative items-center h-full w-[full]">
//           {rotatingNews.map((news, index) => (
//             <div
//               key={news.id}
//               className={`absolute w-[800px] h-[400px] rounded overflow-hidden shadow-lg/70 three${overlapStyles[index]}`}
//             >
//               <div className="relative h-full">
//                 <img
//                   src={news.image}
//                   alt={news.title}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Added black overlay at the top for all cards */}
//                 {index !== 2 && (
//                   <div className="absolute inset-0 bg-black/20"></div>
//                 )}
//               </div>
//               {index === 2 && (
//                 <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start fourr">
//                   <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white text-centre font-bold px-8 pt-3 pb-1 rounded-lg">
//                     {news.date}
//                   </p>
//                   <h2 className="text-lg font-bold">{news.title}</h2>
//                   <p className="text-sm mt-1">{news.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dot indicators */}
//       <div className="flex justify-center mt-30 space-x-2 fivee">
//         {rotatingNews.map((_, index) => (
//           <span
//             key={index}
//             className={`block h-3 w-3 rounded-full ${
//               index === 1 ? "bg-[#E05C5F] h-4 w-4" : "bg-[#E05C5F] opacity-50"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import placeholder1 from "../assets/placeholder_1.jpg";
import placeholder2 from "../assets/placeholder_2.jpg";
import placeholder3 from "../assets/placeholder_3.jpg";
import placeholder4 from "../assets/placeholder_4.jpg";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  isFeatured: boolean;
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
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
        News
      </h1>

      <div
        className="ml-140 relative w-[full] h-[400px] items-center "
        {...swipeHandlers}
      >
        <div className="relative items-center h-full  w-full check">
          {/* {rotatingNews.map((news, index) => (
            <div>
              <div
                key={news.id}
                className={`absolute w-[800px] h-[400px] rounded overflow-hidden shadow-lg transition-all duration-700 ease-in-out  hidden lg:block ${overlapStyles[index]}`}
              >
                <div className="relative h-full  ">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  {index !== 2 && (
                    <div className="absolute inset-0 bg-black/20"></div>
                  )}
                </div>
                {index === 2 && (
                  <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                    <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                      {news.date}
                    </p>
                    <h2 className="text-lg font-bold">{news.title}</h2>
                    <p className="text-sm mt-1">{news.description}</p>
                  </div>
                )}
              </div>
              <div className="md: hidden">
                <div
                  key={news.id}
                  className={`absolute w-[800px] h-[400px] rounded overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${overlapStyles[2]} `}
                >
                  <div className="relative h-full">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                    <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                      {news.date}
                    </p>
                    <h2 className="text-lg font-bold">{news.title}</h2>
                    <p className="text-sm mt-1">{news.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          {rotatingNews.map((news, index) => (
            <div key={news.id}>
              {/* ✅ Mobile version (only show active/front card) */}
              {index === 2 && (
                <div className="lg:hidden ml-[0px] absolute w-[full] h-[300px] rounded  shadow-lg transition-all duration-700 ease-in-out   w-[100%] check">
                  <div className="relative h-full w-[100%] check">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                      <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                        {news.date}
                      </p>
                      <h2 className="text-lg font-bold">{news.title}</h2>
                      <p className="text-sm mt-1">{news.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ✅ Desktop version with stacking */}
              <div
                className={`hidden lg:block absolute w-[800px] h-[400px] rounded overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${overlapStyles[index]}`}
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
                    <div className="absolute inset-0 w-full text-white p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end items-start">
                      <p className="text-sm mb-1 absolute -top-2 -right-2 bg-primary opacity-75 text-white font-bold px-8 pt-3 pb-1 rounded-lg">
                        {news.date}
                      </p>
                      <h2 className="text-lg font-bold">{news.title}</h2>
                      <p className="text-sm mt-1">{news.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() =>
            setActiveIndex(
              (prev) => (prev - 1 + newsData.length) % newsData.length
            )
          }
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          ←
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % newsData.length)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          →
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
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
    </div>
  );
};

export default NewsPage;
