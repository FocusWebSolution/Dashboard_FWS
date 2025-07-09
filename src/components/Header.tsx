import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = isAuthenticated
    ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Templates', path: '/templates' },
        { name: 'Settings', path: '/settings' },
      ]
    : [
        { name: 'Features', path: '#features' },
        { name: 'About', path: '#about' },
        { name: 'Pricing', path: '#pricing' },
      ];

  return (
    <header className="relative">
      <div className="backdrop-blur-md bg-black/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/Logo_focus.png" // Make sure this is in your /public folder
                alt="FocusWebSolution Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-white/10 text-[#eec48b] shadow-lg'
                      : 'text-[#eae8e5] hover:bg-white/5 hover:text-[#e87888]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-[#eae8e5]">Welcome, {user?.name}</span>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white hover:shadow-lg transition-all duration-300"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-[#eae8e5] hover:text-[#e87888] transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white hover:shadow-lg transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-[#eae8e5] hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-white/10 text-[#eec48b]'
                    : 'text-[#eae8e5] hover:bg-white/5 hover:text-[#e87888]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isAuthenticated && (
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-center text-sm font-medium text-[#eae8e5] hover:text-[#e87888] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white text-center hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
