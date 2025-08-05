import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon, Menu, X } from 'lucide-react';
import logo from '../assets/insa_header_logo.png';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="gradient-bg text-white px-4 sm:px-[50px] py-4 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[50px] sm:h-[70px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-6 items-center">
            <li><a href="/" className="text-text-paragraph font-extrabold hover:text-white">Home</a></li>
            
            <Popover className="relative m-0">
              {({ open }) => (
                <>
                  <PopoverButton className='flex items-center space-x-1 font-semibold text-text-paragraph/80 hover:text-white'>
                    About Us 
                    {open ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                  </PopoverButton>
                  <PopoverPanel anchor="bottom" className="p-4 space-y-2 z-50 flex flex-col bg-[#547597]/90 text-text-paragraph rounded-[9px] min-w-[200px]">
                    <a href="/analytics" className="hover:text-white">Our Vision and Mission</a>
                    <a href="/engagement" className="hover:text-white">Our Values</a>
                    <a href="/security" className="hover:text-white">Duties and Responsibilities</a>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            <Popover className="relative m-0">
              {({ open }) => (
                <>
                  <PopoverButton className='flex items-center space-x-1 font-semibold text-text-paragraph/80 hover:text-white'>
                    Cyber Security
                    {open ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                  </PopoverButton>
                  <PopoverPanel anchor="bottom" className="p-4 space-y-2 z-50 flex flex-col bg-[#547597]/90 text-text-paragraph rounded-[9px] min-w-[200px]">
                    <a href="/analytics" className="hover:text-white">Cyber Security</a>
                    <a href="/engagement" className="hover:text-white">What is Cyber?</a>
                    <a href="/security" className="hover:text-white">Cyber-Attack</a>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            <li><a href="/" className="text-text-paragraph/80 font-semibold hover:text-white">News</a></li>
            <li><a href="/" className="text-text-paragraph/80 font-semibold hover:text-white">Contact Us</a></li>
            <li><a href="/" className="text-text-paragraph/80 font-semibold hover:text-white">Documents</a></li>
            <li><a href="/" className="text-text-paragraph/80 font-semibold hover:text-white">Crypto Registry</a></li>
            <li><a href="/signup" className="btn btn-secondary hover:bg-white/20">Logout</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-6 rounded-lg">
          <ul className="space-y-4">
            <li><a href="/" className="block text-white font-extrabold">Home</a></li>
            
            <li className="relative">
              <details>
                <summary className="flex items-center justify-between font-semibold text-white/80 cursor-pointer">
                  About Us
                  <ChevronDownIcon className="w-4 h-4" />
                </summary>
                <ul className="mt-2 pl-4 space-y-2">
                  <li><a href="/analytics" className="block text-white/80 hover:text-white">Our Vision and Mission</a></li>
                  <li><a href="/engagement" className="block text-white/80 hover:text-white">Our Values</a></li>
                  <li><a href="/security" className="block text-white/80 hover:text-white">Duties and Responsibilities</a></li>
                </ul>
              </details>
            </li>

            <li className="relative">
              <details>
                <summary className="flex items-center justify-between font-semibold text-white/80 cursor-pointer">
                  Cyber Security
                  <ChevronDownIcon className="w-4 h-4" />
                </summary>
                <ul className="mt-2 pl-4 space-y-2">
                  <li><a href="/analytics" className="block text-white/80 hover:text-white">Cyber Security</a></li>
                  <li><a href="/engagement" className="block text-white/80 hover:text-white">What is Cyber?</a></li>
                  <li><a href="/security" className="block text-white/80 hover:text-white">Cyber-Attack</a></li>
                </ul>
              </details>
            </li>

            <li><a href="/" className="block text-white/80 font-semibold hover:text-white">News</a></li>
            <li><a href="/" className="block text-white/80 font-semibold hover:text-white">Contact Us</a></li>
            <li><a href="/" className="block text-white/80 font-semibold hover:text-white">Documents</a></li>
            <li><a href="/" className="block text-white/80 font-semibold hover:text-white">Crypto Registry</a></li>
            <li><a href="/signup" className="block btn btn-secondary mt-4 w-full text-center">Logout</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;