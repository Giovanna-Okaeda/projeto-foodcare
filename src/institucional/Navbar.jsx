import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onLogin }) => {
  const location = useLocation();
  const navRef = useRef(null); 
  
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });

    const moveLineToActive = () => {
    if (!navRef.current) return; 
    const activeItem = navRef.current.querySelector('.nav-active');
    if (activeItem) {
      const { offsetLeft, offsetWidth } = activeItem;
      setLineStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1
      });
    }
  };
  useEffect(() => {
    setTimeout(moveLineToActive, 50);
  }, [location.pathname]);

  const handleMouseEnter = (e) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setLineStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const handleMouseLeave = () => {
    moveLineToActive(); 
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-18 py-6 sticky top-0 bg-white z-50 border-b border-gray-100">
      <Link to="/" className="text-3xl tracking-tighter text-gray-800 font-normal">
        Food<span className="text-orange-500 font-black">Care</span>
      </Link>
      
      <div ref={navRef} className="hidden md:flex items-center gap-8 text-base font-bold text-black relative group/nav">
        
        <Link 
          to="/" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 py-2 transition-colors duration-300 ${isActive('/') ? 'text-orange-500 nav-active' : 'text-black hover:text-orange-500'}`}
        >
          Home
        </Link>

        <Link 
          to="/informe-se" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 py-2 transition-colors duration-300 ${isActive('/informe-se') ? 'text-orange-500 nav-active' : 'text-black hover:text-orange-500'}`}
        >
          Informe-se
        </Link>

        <Link 
          to="/como-ajudar" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 py-2 transition-colors duration-300 ${isActive('/como-ajudar') ? 'text-orange-500 nav-active' : 'text-black hover:text-orange-500'}`}
        >
          Como ajudar
        </Link>

        <Link 
          to="/sobre-nos" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 py-2 transition-colors duration-300 ${isActive('/sobre-nos') ? 'text-orange-500 nav-active' : 'text-black hover:text-orange-500'}`}
        >
          Sobre nós
        </Link>

        <span 
          className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out pointer-events-none rounded-full"
          style={{
            left: `${lineStyle.left}px`,
            width: `${lineStyle.width}px`,
            opacity: lineStyle.opacity
          }}
        />

        <span className="text-gray-300 mx-2">|</span>

              <Link 
        to="/sistema" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 py-2 transition-colors duration-300 ${isActive('/sobre-nos') ? 'text-orange-500 nav-active' : 'text-black hover:text-orange-500"
      >
        Entrar
      </Link>
        
        <Link to="/doe-agora">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all shadow-md active:scale-95 font-bold">
            Doe agora
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;