import { useEffect, useRef } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from 'react-icons/md';
import ReactWorldFlag from 'react-world-flags';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
  language: string;
  showMenu: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const Menu = ({
  isOpen,
  onClose,
  theme,
  setTheme,
  t,
  toggleLanguage,
  language,
  showMenu,
  buttonRef
}: MenuProps) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Fecha o menu após clicar
  };

  if (!showMenu) return null;

  return (
    <ul ref={menuRef} className={`menu ${isOpen ? 'open' : ''}`}>
      <li><button className="menu-button" onClick={() => scrollToSection('home')}>{t('about')}</button></li>
      <li><button className="menu-button" onClick={() => scrollToSection('experience')}>{t('experience')}</button></li>
      <li><button className="menu-button" onClick={() => scrollToSection('projects')}>{t('projects')}</button></li>
      <li><button className="menu-button" onClick={() => scrollToSection('contact')}>{t('contact')}</button></li>
      <li>
        <button className="menu-button theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'dark' ? (
            <MdWbSunny size={20} />
          ) : (
            <FaMoon size={20} />
          )}
        </button>
      </li>
      <li>
        <button onClick={toggleLanguage} className="menu-button language-toggle">
          <ReactWorldFlag
            code={language === 'en' ? 'BR' : 'US'}
            className="language-toggle-flag"
            title={language === 'en' ? 'Português (Brasil)' : 'English (US)'}
          />
          <span>
            {language === 'en' ? 'PT-BR' : 'EN'}
          </span>
        </button>
      </li>
    </ul>
  );
};

export default Menu; 