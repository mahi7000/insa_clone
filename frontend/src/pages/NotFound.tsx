import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col space-y-4">
            <h1>404 - Not Found</h1>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
    );
}

export default NotFound;