import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Default to closed on mobile

  const menuItems = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'About Me', path: '/about', icon: 'fas fa-user' },
    { name: 'Portfolio', path: '/portfolio', icon: 'fas fa-briefcase' },
    { name: 'Skills', path: '/skills', icon: 'fas fa-cogs' },
    { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Open sidebar on larger screens
      } else {
        setIsOpen(false); // Close sidebar on mobile
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 text-purple-300 hover:text-purple-100 transition-colors duration-300 z-50 md:hidden"
        aria-label="Toggle Sidebar"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`} />
      </button>
      <div
        className={`min-h-screen w-64 sm:w-72 bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white flex flex-col items-center py-6 sm:py-8 shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed top-0 left-0 z-40 md:sticky md:translate-x-0 md:opacity-100`}
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="absolute inset-0 animate-starfield pointer-events-none">
          <div className="absolute w-1 h-1 bg-white/30 rounded-full top-[10%] left-[20%] animate-twinkle" />
          <div className="absolute w-1 h-1 bg-white/20 rounded-full top-[30%] left-[60%] animate-twinkle delay-200" />
          <div className="absolute w-1 h-1 bg-white/25 rounded-full top-[60%] left-[30%] animate-twinkle delay-400" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-slow" />
        <div className="mb-10 sm:mb-16 text-center relative z-10">
          <h1 className="hidden md:block text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 transform transition-all duration-700 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            Lâm Huệ Trung
          </h1>
          <p className="text-xs sm:text-sm opacity-70 mt-2 sm:mt-3 font-light tracking-wide">Full-Stack Developer</p>
        </div>
        <nav className="flex-1 w-full px-4 sm:px-6 relative z-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => {
                navigate(item.path);
                if (window.innerWidth < 768) setIsOpen(false); // Close sidebar on mobile after click
              }}
              className={`relative flex items-center p-3 sm:p-4 my-2 sm:my-3 rounded-2xl cursor-pointer transition-all duration-500 transform ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-purple-700/80 to-transparent scale-105 shadow-[0_4px_20px_rgba(147,51,234,0.4)]'
                  : isHovered === index
                  ? 'bg-purple-600/40 scale-102 translate-x-2 shadow-[0_4px_15px_rgba(147,51,234,0.3)]'
                  : 'hover:bg-purple-800/20'
              }`}
              style={{
                transform: isHovered === index ? 'rotateY(6deg) translateZ(20px)' : 'rotateY(0deg)',
                perspective: '1200px',
                transition: 'transform 0.5s ease, background 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <i className={`${item.icon} mr-3 sm:mr-4 text-lg sm:text-xl text-purple-300`} />
              <span className="text-sm sm:text-base font-medium tracking-wide">{item.name}</span>
              {isHovered === index && (
                <div className="absolute -right-4 h-6 sm:h-8 w-1 bg-gradient-to-b from-purple-300 to-indigo-300 rounded-full animate-glow" />
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto text-center relative z-10">
          <p className="text-xs sm:text-sm opacity-70 tracking-wide">© 2025 Lâm Huệ Trung</p>
          <p className="text-xs opacity-50 mt-1">Crafted with Precision</p>
        </div>
      </div>
    </>
  );
}

export default SideBar;