import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdWbSunny } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css';

interface headerProps {
  showMenu: boolean;
  text: string;
}

const Header = ({ showMenu, text }: headerProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <GiHamburgerMenu size={24} color="white" />
      </button>

      {showMenu && (
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">About</a></li>
          <li><a href="#about">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link to="/login">Contact</Link></li>
          <li>
            <a href="https://wa.me/5537999931412" target="_blank" rel="noopener noreferrer">
              <MdWbSunny className="social-media-icon" color="white" size={20} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5537999931412" target="_blank" rel="noopener noreferrer">
              <TbWorld className="social-media-icon" color="white" size={20} />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
