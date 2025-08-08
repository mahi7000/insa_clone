import BlogsPage from "./Blogs";
import Hero from "../components/Hero";
import NewsPage from "./News";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsPage />
      <BlogsPage />
    </div>
  );
};

export default Home;
