import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'About Me', path: '/about', icon: 'fas fa-user' },
    { name: 'Portfolio', path: '/portfolio', icon: 'fas fa-briefcase' },
    { name: 'Skills', path: '/skills', icon: 'fas fa-cogs' },
    { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 text-indigo-300 hover:text-purple-100 transition-transform duration-300 z-50 md:hidden"
        aria-label="Toggle Sidebar"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
      </button>

      {/* Sidebar */}
      <aside
        className={`min-h-screen w-64 sm:w-72 bg-gradient-to-br from-[#0f051d] via-[#1a103d] to-[#0a0212] text-white flex flex-col items-center py-8 shadow-2xl transition-all duration-700 ease-in-out 
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        fixed top-0 left-0 z-40 md:sticky md:translate-x-0 md:opacity-100
        border-r border-white/10 backdrop-blur-lg bg-opacity-70`}
      >
        {/* animated ambient lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 bg-purple-500/20 blur-3xl rounded-full -top-10 -left-16 animate-pulse-slow"></div>
          <div className="absolute w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse-slow delay-500"></div>
        </div>

        {/* logo / name */}
        <div className="hidden md:block mb-12 text-center relative z-10">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 drop-shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-transform duration-500 hover:scale-110">
            Lâm Huệ Trung
          </h1>
          <p className="text-sm opacity-70 mt-2 tracking-widest font-light">
            Full-Stack Developer
          </p>
        </div>

        {/* nav menu */}
        <nav className="flex-1 w-full px-6 relative z-10">
          {menuItems.map((item, index) => {
            const active = location.pathname === item.path;
            return (
              <div
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => {
                  navigate(item.path);
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={`group relative flex items-center p-4 my-3 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ${
                  active
                    ? 'bg-gradient-to-r from-purple-700/50 to-indigo-700/30 scale-105 shadow-[0_0_25px_rgba(147,51,234,0.4)]'
                    : 'hover:bg-white/10 hover:scale-[1.03]'
                }`}
                style={{
                  transform:
                    isHovered === index ? 'translateX(6px) rotateY(4deg)' : 'rotateY(0deg)',
                  transition:
                    'transform 0.4s ease, background 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* ripple light */}
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                ></span>

                <i
                  className={`${item.icon} mr-4 text-lg sm:text-xl text-purple-300 drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]`}
                />
                <span className="text-sm sm:text-base font-medium tracking-wide relative z-10">
                  {item.name}
                </span>

                {active && (
                  <div className="absolute right-2 h-8 w-1 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full animate-pulse" />
                )}
              </div>
            );
          })}
        </nav>

        {/* footer */}
        <div className="mt-auto text-center relative z-10 pb-4">
          <p className="text-xs opacity-70 tracking-widest">© 2025 Lâm Huệ Trung</p>
          <p className="text-xs opacity-50 mt-1">Precision & Passion</p>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
