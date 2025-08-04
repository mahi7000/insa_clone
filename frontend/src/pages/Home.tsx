import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-4">
        <h1 className="text-2xl font-bold">Welcome to INSA Clone</h1>
        <p className="text-lg">This is the home page of the INSA Clone project.</p>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
    </div>
  );
}

export default Home;