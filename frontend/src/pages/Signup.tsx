const Signup = () => {
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium">Username</label>
                <input type="text" id="username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
        </form>
        <p className="mt-4 text-sm">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
    </div>
  );
}

export default Signup;