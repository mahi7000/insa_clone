const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} INSA Clone. All rights reserved.
            </p>
            <p className="text-sm">
                Made with ❤️ by the INSA Clone Team.
            </p>
        </div>
    </footer>
  );
}

export default Footer;