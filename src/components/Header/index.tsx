import { useMemo, useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLanguage } from 'react-icons/io5';
import { useLanguage } from '../../contexts/LanguageContext';

import './styles.css';

interface headerProps {
  showMenu: boolean;
  text: string;
}

const Header = ({ showMenu, text }: headerProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { t, toggleLanguage } = useLanguage();

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  const formatNameWithSpaces = useMemo(() => (text: string): string => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += text.charAt(i).toUpperCase() + ' ';
    }
    return newText.trim();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <h2 className="logo">
        <a href="/">
          <span>&lt; </span>{formatNameWithSpaces(text)}<span> /&gt;</span>
        </a>
      </h2>

      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        <GiHamburgerMenu size={24} />
      </button>

      {showMenu && (
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">{t('about')}</a></li>
          <li><a href="#experience">{t('experience')}</a></li>
          <li><a href="#projects">{t('projects')}</a></li>
          <li><a href="#contact">{t('contact')}</a></li>
          <li>
            <a onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
              {theme === 'dark' ? ( 
                <MdWbSunny 
                  className="social-media-icon" 
                  size={20}
                />
              ) : (
                <FaMoon 
                  className="social-media-icon" 
                  size={20}
                />
              )}
            </a>
          </li>
          <li>
            <a onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
              <IoLanguage className="social-media-icon" size={20} />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
