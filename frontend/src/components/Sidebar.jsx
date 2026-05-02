import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Briefcase, Code, Users, Star, Sun, Moon } from 'lucide-react';

const Sidebar = () => {
  // Default to Light Mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Eligibility', path: '/eligibility', icon: BookOpen },
    { name: 'Skills', path: '/skills', icon: Star },
    { name: 'Technical', path: '/technical', icon: Code },
    { name: 'HR Interview', path: '/hr', icon: Users },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Briefcase size={32} />
        <span>Prep Hub</span>
      </div>
      
      <nav style={{ flex: 1 }}>
        {navItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button 
        onClick={toggleTheme} 
        className="nav-link" 
        style={{ marginTop: 'auto', background: 'transparent', border: 'none', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Sidebar;
