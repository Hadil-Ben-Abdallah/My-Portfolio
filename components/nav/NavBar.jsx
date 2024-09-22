import { useState } from 'react';
import { ThemeToggler } from '@/theme/Themetoggler';
import Link from 'next/link';

export default function NavBar() {
  const navigation = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Services', href: '#services' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Projects', href: '#projects' },
    { id: 6, name: 'Blog', href: '#blog' },
    { id: 7, name: 'Certificates', href: '#certificates' },
    { id: 8, name: 'Contact', href: '#contact' },
    {
      id: 9,
      name: <ThemeToggler />,
      href: '/',
      onClick: (e) => e.preventDefault(),
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    setIsOpen(false); // Close the mobile menu if it's open
  };

  return (
    <nav className="navbar fixed w-full z-50 bg-mainBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="#home" onClick={handleLogoClick}>
                <h3
                  aria-label="Hadil Ben Abdallah"
                  className="text-sky-600 text-3xl font-bold"
                >
                  HADIL<span className="text-white text-3xl font-bold">.</span>DEV
                </h3>
              </Link>
            </div>
          </div>
          <div className="hidden hmd:block">
            <div className="ml-4 flex items-center">
              {navigation.map((navlink) => {
                return (
                  <Link
                    onClick={navlink.onClick}
                    className="text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out hover:text-xl hover:scale-105"
                    key={navlink.id}
                    href={navlink.href}
                  >
                    {navlink.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hmd:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="toggle icon"
              className="inline-flex items-center justify-center p-2 rounded-full text-white bg-primary focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                {isOpen ? (
                  <>
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="16" y2="12" />
                    <line x1="4" y1="18" x2="12" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="hmd:hidden">
          <div className="relative px-2 pt-2 pb-3 sm:px-3 bg-mainBg z-50 h-auto min-h-[24rem] flex flex-col justify-between">
            {navigation.map((navlink) => {
              return (
                <Link
                  key={navlink.id}
                  onClick={() => {
                    navlink.onClick && navlink.onClick();
                    setIsOpen(false);
                  }}
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out hover:text-xl hover:scale-105"
                  href={navlink.href}
                >
                  {navlink.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}