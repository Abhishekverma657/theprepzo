import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/prepzologo.jpeg';
import { useEnroll } from '../context/EnrollContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useEnroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Courses', path: '/courses', hasDropdown: false },
    { name: 'Test Series', path: '/test-series', hasDropdown: false },
    { name: 'Results', path: '/results', hasDropdown: false },
    { name: 'Study Material', path: '/study-material', hasDropdown: false },
    { name: 'Scholarship', path: '/scholarship', hasDropdown: false },
    // { name: 'Prepzo Store', path: '/store', hasDropdown: false },
    // { 
    //   name: 'About Us', 
    //   path: '/about-us', 
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: 'About Prepzo', path: '/about-us' },
    //     // { name: 'Blogs', path: '/blogs' },
    //     // { name: 'News', path: '/news' },
    //     { name: 'Careers', path: '/careers' }
    //   ]
    // },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="gradient-green text-white text-xs py-1.5 hidden sm:flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3" />
          <span>+91 87963 39455 &nbsp;|&nbsp; prepzo333@gmail.com</span>
        </div>
        <span className="font-semibold text-prepzo-yellow animate-pulse">🎉 Admissions Open for JEE &amp; NEET 2026 Batch!</span>
        <span className="text-xs text-white/70">Smart prep, learn anytime anywhere</span>
      </div>

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-100'
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img src={logo} alt="Prepzo" className="h-10 w-10 rounded-full object-cover border-2 border-prepzo-green/20 group-hover:border-prepzo-green transition-all duration-300 shadow-sm" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight">
                  <span className="text-prepzo-green">prep</span><span className="text-prepzo-yellow">zo</span>
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase mt-0.5">Smart Prep Platform</span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link to={link.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.path) || (link.hasDropdown && location.pathname.startsWith(link.path)) ? 'text-prepzo-green bg-prepzo-light-green' : 'text-gray-600 hover:text-prepzo-green hover:bg-prepzo-light-green/50'
                    }`}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <Link key={item.name} to={item.path} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-prepzo-light-green hover:text-prepzo-green transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-3">
              <a href="tel:+918796339455" className="flex items-center gap-2 text-sm font-semibold text-prepzo-green hover:text-prepzo-green-dark transition-colors whitespace-nowrap">
                <Phone className="h-4 w-4" /> 87963 39455
              </a>
              <button onClick={() => openModal()} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full gradient-green hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                <User className="h-4 w-4" /> Enroll Now
              </button>
            </div>

            <button id="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-gray-600 hover:text-prepzo-green hover:bg-prepzo-light-green transition-colors">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`xl:hidden transition-all duration-300 overflow-hidden border-t border-gray-100 bg-white ${isMobileMenuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-1">
                <Link to={link.path} onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive(link.path) ? 'text-prepzo-green bg-prepzo-light-green' : 'text-gray-700 hover:text-prepzo-green hover:bg-prepzo-light-green/50'
                  }`}>
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1 pb-2">
                    {link.dropdownItems.map((item) => (
                      <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                          isActive(item.path) ? 'text-prepzo-green bg-prepzo-light-green' : 'text-gray-600 hover:text-prepzo-green hover:bg-prepzo-light-green/50'
                        }`}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:+918796339455" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-prepzo-green bg-prepzo-light-green rounded-xl">
              <Phone className="h-4 w-4" /> +91 87963 39455
            </a>
            <button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="w-full flex justify-center items-center gap-2 px-4 py-3 text-base font-semibold text-white gradient-green rounded-xl shadow-md">
              <User className="h-5 w-5" /> Enroll Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
