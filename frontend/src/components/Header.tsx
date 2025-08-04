const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">INSA Clone</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/signup" className="hover:underline">Signup</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;