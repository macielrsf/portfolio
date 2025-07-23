import { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import useLanguage from '@hooks/useLanguage';
import Menu from './Menu';
import Logo from './Logo';

import './styles.css';

interface headerProps {
  showMenu: boolean;
  text: string;
}

const Header = ({ showMenu, text }: headerProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { t, toggleLanguage, language } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <Logo text={text} className="header-logo" />

      <button ref={buttonRef} className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        <GiHamburgerMenu size={24} />
      </button>

      {showMenu && (
        <Menu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          theme={theme}
          setTheme={theme => setTheme(theme)}
          t={t}
          toggleLanguage={toggleLanguage}
          language={language}
          showMenu={showMenu}
          buttonRef={buttonRef as React.RefObject<HTMLButtonElement | null>}
        />
      )}
    </header>
  );
};

export default Header;
