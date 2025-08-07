import RecentActivity from "../components/RecentActivity";
import BlogsPage from "./Blogs";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <RecentActivity />
      <BlogsPage />
      <Hero />
      <RecentActivity />
    </div>
  );
};

export default Home;
