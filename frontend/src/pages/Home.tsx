import BlogsPage from "./Blogs";
import Hero from "../components/Hero";
import NewsPage from "./News";
import Videos from "../components/Videos";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsPage />
      <Videos />
      <BlogsPage />
    </div>
  );
};

export default Home;
